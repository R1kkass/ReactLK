import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { statsApi } from "../../app/services/statsService";

ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
    responsive: true,
    interaction: {
        mode: "index" as const,
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: "Chart.js Line Chart - Multi Axis",
        },
    },
    scales: {
        y: {
            type: "linear" as const,
            display: true,
            position: "left" as const,
        },
        y1: {
            type: "linear" as const,
            display: true,
            position: "right" as const,
            grid: {
                drawOnChartArea: false,
            },
        },
    },
};


const Stats = () => {
    const { data } = statsApi.useGetTasksQuery();

    return (
        <Doughnut
            data={{
                labels: [
                    "Не прочитано",
                    "В работе",
                    "Готово для проверки",
                    "Готово",
                    "Выполнено",
                ],
                datasets: [
                    {
                        label: "",
                        data,
                        backgroundColor: [
                            "rgba(255, 255, 255, 0.2)",
                            "rgba(154, 152, 155, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(220, 68, 70, 0.2)",
                            "rgba(73, 170, 25, 0.2)",
                        ],
                        borderColor: [
                            "rgba(255, 255, 255, 1)",
                            "rgba(154, 152, 155, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(220, 68, 70, 1)",
                            "rgba(73, 170, 25, 1)",
                        ],
                        borderWidth: 1,
                    },
                ],
            }}
        />
    );
};

export default Stats;
