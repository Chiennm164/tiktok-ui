import Header from "~/components/Layout/components/Header";
import SideBar from "./SideBar";

function DefaultLayout({children}) {
     return (
          <div>
               <Header />
               <div class='container'>
                    <SideBar />
                    <div class="content">
                         {children}
                    </div>
               </div>
          </div>
     );
}

export default DefaultLayout;
