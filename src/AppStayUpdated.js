export default function AppStayUpdated() {
  return (
    <div className="
            pl-6
            flex
            flex-col
            gap-y-4
          ">
      <h1 className="text-4xl font-bold">Stay updated!</h1>
      <p className="">Join 60,000+ product managers receiving monthly updates on:</p>

      <ul>
        <li className="pl-6 bg-no-repeat bg-[url(./images/icon-list.svg)]">
          Product discovery and building what matters
        </li>
        <li className="my-2 pl-6 bg-no-repeat bg-[url(./images/icon-list.svg)]">
          Measuring to ensure updates are a success
        </li>
        <li className="pl-6 bg-no-repeat bg-[url(./images/icon-list.svg)]">
          And much more!
        </li>
      </ul>
    </div>
  );
}