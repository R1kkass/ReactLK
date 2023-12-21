import { Col, Typography, Row } from "antd";
import TaskCard from "../../entities/TaskCard/TaskCard";
import { tasksApi } from "../../app/services/tasksService";

const { Text } = Typography;
const ShowTasks = () => {
    const { data: tasks } = tasksApi.useGetTasksQuery();

    return (
        <Row
            style={{
                height: "calc(100vh - 100px)",
                gap: 10,
                flexWrap: "nowrap",
                overflow: "auto",
            }}
        >
            <Col
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    minWidth: 300,
                }}
            >
                <Text>Не прочитано</Text>
                {tasks?.map((task) => (
                    <>
                        {task.status == "Не прочитано" && (
                            <TaskCard
                                id={task._id}
                                status={task.status}
                                title={task.title}
                                contributor={task.contributor}
                                time={task.time}
                                correlation={task?.correlation}
                            />
                        )}
                    </>
                ))}
            </Col>
            <Col
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    minWidth: 300,
                }}
            >
                <Text type="secondary">В работе</Text>
                {tasks?.map((task) => (
                    <>
                        {task.status == "В работе" && (
                            <TaskCard
                                id={task._id}
                                status={task.status}
                                title={task.title}
                                contributor={task.contributor}
                                time={task.time}
                                correlation={task?.correlation}
                            />
                        )}
                    </>
                ))}
            </Col>
            <Col
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    minWidth: 300,
                }}
            >
                <Text type="warning">Готово для проверки</Text>
                {tasks?.map((task) => (
                    <>
                        {task.status == "Готово для проверки" && (
                            <TaskCard
                                id={task._id}
                                status={task.status}
                                title={task.title}
                                contributor={task.contributor}
                                time={task.time}
                                correlation={task?.correlation}
                            />
                        )}
                    </>
                ))}
            </Col>
            <Col
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    minWidth: 300,
                }}
            >
                <Text type="danger">Готово</Text>
                {tasks?.map((task) => (
                    <>
                        {task.status == "Готово" && (
                            <TaskCard
                                id={task._id}
                                status={task.status}
                                title={task.title}
                                contributor={task.contributor}
                                time={task.time}
                                correlation={task?.correlation}
                            />
                        )}
                    </>
                ))}
            </Col>
            <Col
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    minWidth: 300,
                }}
            >
                <Text type="success">Выполнено</Text>
                {tasks?.map((task) => (
                    <>
                        {task.status == "Выполнено" && (
                            <TaskCard
                                id={task._id}
                                status={task.status}
                                title={task.title}
                                contributor={task.contributor}
                                time={task.time}
                                correlation={task?.correlation}
                            />
                        )}
                    </>
                ))}
            </Col>
        </Row>
    );
};

export default ShowTasks;
