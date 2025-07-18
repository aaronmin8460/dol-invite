export default function AccountInfo({ account }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(
      `${account.bank} ${account.number} ${account.holder}`
    );
    alert("계좌번호가 복사되었습니다!");
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-md mx-auto w-full max-w-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        마음 전하실 곳
      </h2>

      {/* 🔗 Hyperlink or button */}
      <div className="flex justify-center gap-4">
        <button onClick={handleCopy} className="text-sm hover:text-blue-800">
          {account.bank} {account.number} {account.holder}
        </button>

        <a
          href={`https://qr.kakaopay.com/Ej9GLFeXd`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 underline hover:text-blue-800">
          송금 바로가기
        </a>
      </div>
    </div>
  );
}
