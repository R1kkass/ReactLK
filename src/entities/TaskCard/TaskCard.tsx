import React from "react";
import { Card, Select } from "antd";
import MyModal from "../MyModal/MyModal";
import dayjs from "dayjs";
import { tasksApi } from "../../app/services/tasksService";

interface TaskCardProps {
    title: string;
    contributor: string;
    time: string;
    status: string;
    id: string;
    correlation: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
    title,
    time,
    contributor,
    status,
    id,
    correlation,
}) => {
    const [setTask, { isLoading }] = tasksApi.useSetTasksMutation();

    const handleChange = (status: string) => {
        setTask({ id, status });
    };

    return (
        <Card
            size="small"
            title={title}
            extra={
                <MyModal title={title}>
                    <p>Кому: {contributor}</p>
                    <p>Время:</p>
                    <p>C: {dayjs(time[0]).format("MM.DD.YY h:mm")}</p>
                    <p>До: {dayjs(time[0]).format("MM.DD.YY h:mm")}</p>
                    <p>Важность: {correlation}</p>
                    <Select
                        disabled={isLoading}
                        defaultValue={status}
                        style={{ width: 120 }}
                        onChange={handleChange}
                        options={[
                            { title: "Не прочитано", value: "Не прочитано" },
                            { title: "В работе", value: "В работе" },
                            {
                                title: "Готово для проверки",
                                value: "Готово для проверки",
                            },
                            { title: "Готово", value: "Готово" },
                            { title: "Выполнено", value: "Выполнено" },
                        ]}
                    />
                </MyModal>
            }
            style={{ width: 300 }}
        >
            <p>Кому: {contributor}</p>
            <p>Время:</p>
            <p>C: {dayjs(time[0]).format("MM.DD.YY h:mm")}</p>
            <p>До: {dayjs(time[0]).format("MM.DD.YY h:mm")}</p>
        </Card>
    );
};

export default TaskCard;
