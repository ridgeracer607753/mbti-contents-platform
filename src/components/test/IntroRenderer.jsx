function IntroRenderer({currentTest}) {
  return <div>
    <h1>{currentTest?.info?.mainTitle}</h1>
  </div>;

}

export default IntroRenderer;