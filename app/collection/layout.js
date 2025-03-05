import SideNav from "./SideNav"
const layout = ({ children }) => {
    return (
        <div className="flex h-screen flex-col sm:flex-row md:overflow-hidden mx-auto  py-6">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    )
}

export default layout
