import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { login } from '../api/auth';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      alert('올바르게 로그인이 되었습니다');
      console.log('로그인 성공:', data);
    },
    onError: (error) => {
      const msg = error.response?.data?.message;
      if (msg === '존재하지 않는 사용자입니다.') {
        alert('존재하지 않는 회원입니다');
      } else {
        alert('에러가 발생했습니다');
        console.error('로그인 실패:', error);
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('이메일과 비밀번호를 입력해주세요.');
      return;
    }

    mutation.mutate({ username: email, password });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>로그인</h2>
      <div>
        <input
          type="text"
          placeholder="이메일 주소"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* 이메일 형식 검사 */}
        {!/^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/.test(
          email
        ) &&
          email && (
            <p style={{ color: 'red' }}>정확한 이메일 주소를 입력하세요.</p>
          )}
      </div>
      <div>
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? '요청 중...' : '로그인'}
      </button>
    </form>
  );
}
