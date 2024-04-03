export const RevenueCard = ({
  title,
  orderCount,
  amount
}) => {
  return (
    <div className= "bg-white rounded shadow-md p-2">
      <div>
        {title}
        ?
      </div>
      <div className="flex justify-between" >
        <div>
          ₹{amount}
        </div>
        {orderCount ? <div>
          {orderCount} orders {">"}
        </div> : null}
      </div>
    </div>
  )
};