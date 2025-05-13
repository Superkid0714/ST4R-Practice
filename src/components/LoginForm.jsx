import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className="login-form" onSubmit={(e) => e.preventDefault()}>
      <h2>로그인</h2>
      <div>
        <input
          type="text"
          placeholder="이메일 주소"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email && (
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
      <button type="submit">로그인</button>
    </form>
  );
}
