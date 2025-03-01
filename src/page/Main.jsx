import CategoryButtons from "../components/main/CategoryButtons";
import LanguageIcons  from "../components/main/LanguageIcons";
import MainBanner from "../components/main/MainBanner";
import ThumbnailList from "../components/main/ThumbnailList";


function Main() {
  return (
    <div>
      <LanguageIcons />
      <MainBanner />
      <CategoryButtons />
      <ThumbnailList />
    </div>
  );
}

export default Main;
    