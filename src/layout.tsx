import { Children, type PropsWithChildren } from "react";
import Header from "./components/ui/Header"
const Layout = ({children} : PropsWithChildren) =>{
    return (
        <div className="bg-gradient-to-br from background to-muted">
            <Header />
            <main className="min-h-screen container mx-auto px-4 py-8">
            {children } 
            </main>
           <footer className="border-t backdrop-blur text-center text-gray-200 supports-[backdrop-filter]: bg - background/60" >
            <div className="container mx-auto px-4">
                <p className="mx-auto text-grey-400">
                    Made by Utkarsh 
                </p>
            </div>
           </footer>
        </div>
    )
}
export default Layout ;