import React from "react";
import { getYear, getMonth } from "date-fns";

function DatepickerCustomHeader ({
                          date,
                          changeYear,
                          changeMonth,
                          decreaseMonth,
                          increaseMonth,
                          prevMonthButtonDisabled,
                          nextMonthButtonDisabled,
                          getBackToToday,
                          years,
                          months,
                      }) {
    return (
        <div
            style={{
                margin: 10,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                {"<"}
            </button>
            <button
                onClick={(e) =>
                    getBackToToday({
                        e,
                        changeYear,
                        changeMonth,
                    })
                }
            >
                {"🏠"}
            </button>
            <select
                className="custom-select-style"
                value={getYear(date)}
                onChange={({ target: { value } }) => changeYear(value)}
            >
                {years.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <select
                className="custom-select-style"
                value={months[getMonth(date)]}
                onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                }
            >
                {months.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                {">"}
            </button>
        </div>
    );
};

export default DatepickerCustomHeader;