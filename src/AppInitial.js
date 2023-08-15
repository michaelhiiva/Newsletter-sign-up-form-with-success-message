import AppBody from './AppBody.js';
import AppHeader from './AppHeader.js';

export default function AppInitial() {
  return (
    <div id="subscription-page-item" className="grid
        items-center
        bg-teal-900
        h-screen
        md:place-content-center
      ">
      <div className="
        flex
        bg-neutral-50
        md:rounded-2xl
        md:p-10
        md:flex-row-reverse
        max-md:flex-col 
        max-md:w-96
        max-md:mx-auto
      ">
        <AppHeader />
        <AppBody />
      </div>
    </div>
  );
}