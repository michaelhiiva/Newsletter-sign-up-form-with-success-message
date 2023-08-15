import successIcon from './images/icon-success.svg'

export default function AppSuccess({ emailAddressOutput, subscriptionPage, successPage }) {

  const handleDismissMessageClick = () => {
    // Handle the main display items hidden
    subscriptionPage.current.classList.toggle('hidden');

    // Handle the state of the display on success-page-item
    successPage.current.classList.toggle('hidden');
  };

  return (
    <div ref={successPage} className="hidden
        grid 
        items-center
        bg-teal-900
        place-content-center
        h-screen
      ">
      <div className="
        flex
        bg-neutral-50
        rounded-2xl
        p-10
        flex-col 
        w-96
        mx-auto
      ">
        <div className="flex flex-col gap-2">
          <img src={successIcon} className="my-1 w-14 h-14" alt="Success Icon" />
          <h1 className="text-4xl text-teal-800 font-bold">Thanks for subscribing!</h1>
          <p className="text-teal-700">
            A confirmation email has been sent to <span ref={emailAddressOutput}></span>. Please open it and click the button inside to confirm your subscription.
          </p>
          <button type="submit"

            onClick={() => {
              handleDismissMessageClick();
            }}

            className="
          submit_button
          bg-blue-900
          hover:bg-blue-700
          text-neutral-50
          mt-4
          rounded-lg
          w-80
          py-2
          mx-auto
        ">
            Dismiss Message
          </button>
        </div>
      </div>
    </div>
  );
}