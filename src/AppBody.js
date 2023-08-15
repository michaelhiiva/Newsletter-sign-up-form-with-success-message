import AppForm from './AppForm.js';
import AppStayUpdated from './AppStayUpdated.js';

export default function AppBody({ emailAddressInput, emailAddressOutput, subscriptionPage, successPage }) {
  return (
    <div className="
          mx-auto
          w-96 
          max-md:mt-6
          md:my-auto
        ">
      <AppStayUpdated />
      <AppForm
        emailAddressInput={emailAddressInput}
        emailAddressOutput={emailAddressOutput}
        subscriptionPage={subscriptionPage}
        successPage={successPage}
      />
    </div>
  );
}