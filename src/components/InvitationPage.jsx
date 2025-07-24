export default function InvitationPage({ data }) {
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
          <p className="text-gray-600 mt-2">
            💌 계좌: {data.account.bank} {data.account.number}
            <br />
            예금주: {data.account.holder}
          </p>
        </div>
        <p className="text-sm mt-10 text-gray-400">
          © 2025 돌잔치 초대장 - Made by Byeongil Min
        </p>
      </div>
    </div>
  );
}
