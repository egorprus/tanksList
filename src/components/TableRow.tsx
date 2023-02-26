import React from 'react';
import { TankInterface } from './Types';

interface ITableRow {
    tableItem: TankInterface,
    index: number
}

const TableRow: React.FC<ITableRow> = ({ tableItem, index}) => {
    return (
        <div className="table__row" key={index}>
            <div className="table__cell">{tableItem.name}</div>
            <div className="table__cell">{tableItem.nation}</div>
            <div className="table__cell"><img src={tableItem.images?.small_icon} alt="tank icon"/></div>
            <div className="table__cell">{tableItem.type}</div>
            <div className="table__cell">{tableItem.tier}</div>
            <div className="table__cell">{tableItem.tank_id}</div>
        </div>
    );
};

export default TableRow;