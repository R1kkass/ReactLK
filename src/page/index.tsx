import { Route, Routes } from "react-router-dom";
import Chat from "./Chat/Chat";
import Authorization from "./Authorization/Authorization";
import Tasks from "./Tasks/Tasks";
import GenirationUser from "./GeristrationUser/GeristrationUser";
import ShowTasks from "./Tasks/ShowTasks";
import { useAppSelector } from "../app/store/hook";
import Stats from "./Stats/Stats";
import { appJwtDecode } from "../app/jwtDecode";
import ShowTasksUser from "./Tasks/ShowTasksUser";

const Routing = () => {
    const token = useAppSelector((state) => state.tokenReducer.token);
    const user = appJwtDecode(localStorage.getItem("access_token"));

    if (!token) {
        return (
            <Routes>
                <Route path="/auth" element={<Authorization />} />
            </Routes>
        );
    }

    if (user?.jobTitle === "Директор") {
        return (
            <Routes>
                <Route path="/chat" element={<Chat />} />
                <Route path="/createtask" element={<Tasks />} />
                <Route path="/registrationuser" element={<GenirationUser />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/tasks" element={<ShowTasks />} />
            </Routes>
        );
    }

    return (
        <Routes>
            <Route path="/chat" element={<Chat />} />
            <Route path="/tasks" element={<ShowTasksUser />} />
        </Routes>
    );
};

export default Routing;
