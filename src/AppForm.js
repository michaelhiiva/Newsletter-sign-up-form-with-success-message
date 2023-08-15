export default function AppForm() {
    const email_address_input = document.querySelector(".email_address_input");
    const email_error = document.querySelector(".email-error");
    const subscriber_email_address_output = document.querySelector(".subscriber-email-address");

    const subscriptionPageItem = document.getElementById("subscription-page-item");
    const successPageItem = document.getElementById("success-page-item");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Email address regular expression
        const email_address_regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        // Send input to success page and display success page
        if (email_address_input
            && subscriptionPageItem
            && successPageItem
            && email_address_input.value.match(email_address_regex)) {
            // Set the output text for the success page to the input of 
            // email address input.
            subscriber_email_address_output.textContent = email_address_input.value;

            // Handle the main display items hidden
            subscriptionPageItem.classList.toggle('hidden');

            // Handle the state of the display on success-page-item
            successPageItem.classList.toggle('hidden');
        } else {
            // display an error for the email
            const toggleError = () => {
              email_address_input.classList.toggle('border-rose-600');
              email_address_input.classList.toggle('bg-rose-400');
              if(email_error) email_error.classList.toggle('hidden');
            }

            toggleError();

            // Clear the error after 5 seconds
            setTimeout(toggleError, 5000);
        }

    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col py-4 gap-xl">

            <div className="flex p-0">
                <p className="pl-8 pb-1 text-sm font-bold">Email</p>
                <p className="email-error hidden pl-36 text-sm text-rose-600">Valid Email Required</p>
            </div>
            <input type="text" className="email_address_input
                border-2
                border-gray-400
                rounded-md
                w-80
                p-2
                mx-auto
            " id="email_address_input" placeholder="example@example.com" />
            <button type="submit" className="
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
                Subscribe to Monthly Newsletter
            </button>
        </form>
    );
}