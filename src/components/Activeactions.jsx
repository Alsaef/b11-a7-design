import React from 'react';

const Activeactions = ({datas}) => {
    return (
        <div>


    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Items</th>
        <th>Current Bid</th>
        <th>Time Left</th>
        <th>Bid Now</th>
      </tr>
    </thead>
    <tbody>

      {datas.map(data=>(
          <tr>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src={data.image}
                    alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{data.title}</div>
              </div>
            </div>
          </td>
          <td>
            
          ${data.currentBidPrice}
            
          </td>
          <td>{data.timeLeft}</td>
          <th>
            <button className="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
    );
};

export default Activeactions;