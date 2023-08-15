import AppForm from './AppForm.js';
import AppStayUpdated from './AppStayUpdated.js';

export default function AppBody() {
    return (
        <div className="
          mx-auto
          w-96 
          max-md:mt-6
          md:my-auto
        ">
          <AppStayUpdated />
          <AppForm />
        </div>
    );
}