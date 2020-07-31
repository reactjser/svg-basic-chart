import React, { useState } from 'react';

const CHART_WIDTH = 400;
const CHART_HEIGHT = 300;
const MARGIN = 20;
const BAR_WIDTH = 50;

const Home = () => {
  const [dataSet] = useState({
    current: [15, 11, 17, 25, 37],
    total: [25, 26, 40, 45, 68],
  });

  const barGap =
    (CHART_WIDTH - MARGIN * 2 - BAR_WIDTH * dataSet.total.length) /
    (dataSet.total.length - 1);

  const scale = (CHART_HEIGHT - 2 * MARGIN) / Math.max(...dataSet.total);

  return (
    <div className="home">
      <svg
        style={{
          width: CHART_WIDTH,
          height: CHART_HEIGHT,
          border: '1px solid #42b983',
        }}
      >
        {new Array(dataSet.total.length).fill(true).map((_, index) => {
          // 总高度
          const totalBarHeight = scale * dataSet.total[index];
          // 下面柱子高度
          const bottomBarHeight = scale * dataSet.current[index];

          return (
            <g
              transform={`translate(${MARGIN +
                index * (BAR_WIDTH + barGap)}, ${CHART_HEIGHT -
                totalBarHeight -
                MARGIN})`}
            >
              <rect
                width={BAR_WIDTH}
                height={totalBarHeight - bottomBarHeight}
                fill="rgb(56, 122, 202)"
              />
              <rect
                y={totalBarHeight - bottomBarHeight}
                width={BAR_WIDTH}
                height={bottomBarHeight}
                fill="rgb(98, 204,122)"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default Home;
