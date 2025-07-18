export default function AccountInfo({ account }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md mx-auto w-full max-w-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        마음 전하실 곳
      </h2>
      <p className="text-gray-600">
        {account.bank} {account.number} {account.holder}
      </p>
    </div>
  );
}
