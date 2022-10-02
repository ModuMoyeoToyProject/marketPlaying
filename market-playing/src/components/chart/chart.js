import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Chartjs from "chart.js";

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
`;

const Canvas = styled.div`
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 400px;
`;

const LineChart = () => {
  const chartContainer = useRef(null);

  useEffect(() => {
    let ctx = chartContainer.current.getContext("2d");
    let gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "rgba(255, 0, 0, 0.3)");
    gradient.addColorStop(1, "rgba(255, 0, 0, 0.1)");
    new Chartjs(ctx, {
      type: "line",
      data: {
        labels: ["1960", "1970", "1980", "1990", "2000", "2010", "2020"],
        datasets: [
          {
            type: "line",
            label: "연도별 수도권 인구비중(%)",
            borderCapStyle: "round",
            borderColor: "red",
            backgroundColor: gradient,
            pointBackgroundColor: "rgba(255, 0, 0, 0.2)",
            pointOpacity: 0.5,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: "red",
            data: [
              { x: "1960", y: 20.8 },
              { x: "1970", y: 28.3 },
              { x: "1980", y: 35.5 },
              { x: "1990", y: 42.8 },
              { x: "2000", y: 46.3 },
              { x: "2010", y: 49.2 },
              { x: "2019", y: 50.0 },
              { x: "2020", y: 50.2 },
            ],
          },
        ],
      },
      options: {
        animation: {
          duration: 2000,
        },
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          mode: "x",
          intersect: false,
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "연도",
              },
              type: "time",
              time: {
                unit: "year",
                unitStepSize: 10,
              },
              ticks: {
                fontSize: 13,
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "수도권 인구비중",
              },
              ticks: {
                fontSize: 13,
                beginAtZero: true,
                callback: function (value, index, values) {
                  return value + "%";
                },
              },
            },
          ],
        },
      },
    });
  }, [chartContainer]);

  return (
    <Section>
      <Container>
        <Title>연도별 수도권 인구비중</Title>
        <Canvas>
          <canvas ref={chartContainer} />
        </Canvas>
      </Container>
    </Section>
  );
};

export default LineChart;
