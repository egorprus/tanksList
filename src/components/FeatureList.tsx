import React from 'react';
import TableRow from './TableRow';
import { TankInterface } from './Types';

interface TanksProps {
    tanks: TankInterface[] | null,
    loading: boolean
}

const FeatureList: React.FC<TanksProps> = ({tanks, loading}) => {
    return (
        <div className="table">
            <div className="table__header">
                <div className="table__row">
                    <div className="table__cell">Name</div>
                    <div className="table__cell">Nation</div>
                    <div className="table__cell">Iamge</div>
                    <div className="table__cell">Type</div>
                    <div className="table__cell">Tier</div>
                    <div className="table__cell">Tank id</div>
                </div>
            </div>
            {loading ?
                <h1>loading...</h1> :
                <div className="table__body">
                    {tanks ? tanks.map((item, index) => {
                            return <TableRow index={index} tableItem={item} />
                    })
                        : <h2>No results</h2>
                    }
                </div>
            }
        </div>
    );
};

export default FeatureList;