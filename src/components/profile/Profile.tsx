import { memo } from "react";

export const Profile: React.VFC = memo(() => {
  return (
    <article>
      <h1 className="pb-4 text-3xl font-bold">まよねーづのプロフィール詳細</h1>

      <section>
        <h2>経歴</h2>
      </section>
      <section>
        <h2>スキルセット</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </section>
      <section>
        <h2>趣味</h2>
        <ul>
          <li>プログラミング</li>
          <li>米津玄師</li>
          <li>猫</li>
        </ul>
      </section>
    </article>
  );
});

Profile.displayName = "Profile";
