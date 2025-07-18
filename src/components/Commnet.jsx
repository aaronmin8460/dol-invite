export default function Comment({ name }) {
  return (
    <>
      <div className=" font-bold mb-2 text-center"></div>
      <h2 className="text-2xl font-semibold mb-4 text-center">
        {name}의 첫 번째 생일 초대장
      </h2>
      <p>
        저희 {name}의 첫번째 생일을 맞이했습니다.
        <br />
        일년동안 {name}의 성장을 사랑으로
        <br />
        지켜봐주신분 분들과
        <br />
        {name} 의 첫번째 생일을
        <br />
        함께 축하하고자 자리를 마련하였습니다.
        <br />
        바쁘시더라도, 참석하시어
        <br />
        기쁘고 뜻깊은 시간을
        <br />
        빛내 주시면 감사하겠습니다.
      </p>
    </>
  );
}
