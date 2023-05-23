import React, { useEffect, useState, useRef } from "react";
import "./Timesheet.css";
import { getTimeSheet } from "../../Service/TimesheetService";
import DescriptionForm from "./descriptionForm";
import { SiReadthedocs } from "react-icons/si";
import {reduceFetchedTimeSheetData} from '../../Utils/getTemplate';

const RightRow = ({
  row,
  handlechange,
  date,
  week,
  start,
  end,
  slide,
  userFinalData,
  setUserFinalData,
}) => {
  const [userTimeSheetData, setuserTimeSheetData] = useState([]);
  const [isDescription, setDescription] = useState(false);
  

  const BillableRef = useRef("");

  useEffect(() => {
    getTimeSheet(week)
      .then((data) => {
        const newPreparedData = reduceFetchedTimeSheetData(data);
        setuserTimeSheetData(() => [...newPreparedData]);
        
      })
      .catch((e) => {
        setuserTimeSheetData([]);
        BillableRef.current.value = "";
      });

    return () => {
      setDescription(false);
    };
  }, [start, end]);

  console.log(userTimeSheetData);

  return (
    <>
 
      <tr>
        <td style={{ position: "relative" }}>
          <input
            type="text"
            className="right-table-td"
            onChange={handlechange}
            name="workItem"
            data-row={row}
            defaultValue={userTimeSheetData[row - 1]?.workItem || ""}
            disabled={userTimeSheetData[row - 1]?.workItem ? true : false}
          />
        </td>
        <td style={{ position: "relative" }}>
          <SiReadthedocs
            onClick={() => setDescription(!isDescription)}
            style={{ position: "absolute", right: "26px" }}
          />
          {isDescription ? (
            <DescriptionForm
              slide={slide}
              setDescription={setDescription}
              userFinalData={userFinalData}
              setUserFinalData={setUserFinalData}
              row={row}
              date={date}
            />
          ) : (
            ""
          )}
        </td>
        
        <td>
          <select
            className="right-table-td"
            onChange={handlechange}
            name="billableStatus"
            data-row={row}
            defaultValue={userTimeSheetData[row - 1]?.billableStatus}
            disabled={userTimeSheetData[row - 1]?.billableStatus ? true : false}
            value={userTimeSheetData[row - 1]?.billableStatus}
            ref={BillableRef}
          >
            <option value="">Select status</option>
            <option value="Billable">Billable</option>
            <option value="Non-Billable">Non-Billable</option>
          </select>
        </td>

        {date.map((day, index) => (
          <td key={index}>
            <input
              type="text"
              className={
                index === 0 || index === 6 ? "date-td date-holiday" : "date-td"
              }
              placeholder="00:00"
              onChange={handlechange}
              name="totalTime"
              defaultValue={
                userTimeSheetData.length > 0
                  ? userTimeSheetData[row - 1]?.dates[day]
                  : ""
              }
              disabled={
                userTimeSheetData.length > 0 &&
                userTimeSheetData[row - 1]?.dates[day]
                  ? true
                  : false
              }
              data-date={day}
              data-row={row}
            />
          </td>
        ))}

        <td className="date-td-span-row">
          <span>
            {userTimeSheetData[row - 1]?.totalHour
              ? String(
                  userTimeSheetData[row - 1]?.totalHour +
                    parseInt(userTimeSheetData[row - 1]?.totalMinute / 60)
                ).padStart(2, 0)
              : "00"}
            :
            {userTimeSheetData[row - 1]?.totalMinute
              ? String(userTimeSheetData[row - 1]?.totalMinute % 60).padStart(
                  2,
                  0
                )
              : "00"}
          </span>
        </td>
      </tr>
      
    </>
  );
};

export default RightRow;
