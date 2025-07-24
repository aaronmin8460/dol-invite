export default function InvitationPage({ data }) {
  const copyText = `${data.account.bank} ${data.account.number} ${data.account.holder}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(copyText);
    alert("계좌번호가 복사되었습니다!");
  };

  return (
    <div className="bg-white w-full min-h-screen">
      <div className="max-w-md mx-auto text-center">
        {data.photos.map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt={`junwoo-img-${idx}`}
            className="w-full h-auto object-cover"
            style={{ maxWidth: "100vw" }}
          />
        ))}

        <div className="bg-gray-100 rounded-lg p-4 mt-4">
          <p className="text-gray-600 text-lg font-semibold">
            🎂 생일: {data.birth}
          </p>

          {/* 복사 가능한 계좌 정보 */}
          <button
            onClick={handleCopy}
            className="text-gray-700 text-base font-medium mt-2 cursor-pointer hover:underline active:text-blue-600"
            title="클릭 시 복사됩니다">
            {copyText}
          </button>

          <br />

          {/* 카카오페이 링크 */}
          <a
            href={data.account.kakao}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 underline hover:text-blue-800 mt-2 inline-block">
            👉 카카오페이로 바로 송금하기
          </a>
        </div>

        <p className="text-sm mt-10 text-gray-400">
          © 2025 돌잔치 초대장 - Made by Byeongil Min
        </p>
      </div>
    </div>
  );
}
