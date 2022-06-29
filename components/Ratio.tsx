import { useState } from 'react';

export default function Ratio() {
  let ratio = 12;
  const [coffeeAmount, setCoffeeAmount] = useState(Number);
  const [waterAmount, setWaterAmount] = useState(0);

  console.log(coffeeAmount);

  return (
    <>
      <div className='flex justify-center w-56 gap-4 p-4 mt-4 text-white rounded-md bg-zinc-900'>
        <p>Coffee Amount</p>
        <input
          onChange={(event) => setCoffeeAmount(event.target.value)}
          className='w-10 text-center rounded-md text-zinc-300 bg-zinc-600'
          type='number'
        />
      </div>
      <div className='flex justify-around py-4 m-4 text-center text-white rounded-md w-80 bg-zinc-900'>
        <div>
          <p className='text-2xl font-bold'>Ratio</p>
          <p>1:12</p>
          <p>1:13</p>
          <p>1:14</p>
          <p>1:15</p>
          <p>1:16</p>
        </div>
        <div>
          <p className='text-2xl font-bold'>Water</p>
          <p>{coffeeAmount * 12}g</p>
          <p>{coffeeAmount * 13}g</p>
          <p>{coffeeAmount * 14}g</p>
          <p>{coffeeAmount * 15}g</p>
          <p>{coffeeAmount * 16}g</p>
        </div>
      </div>

      {/* <table className='m-4 text-center text-white border-separate rounded-md table-auto border-spacing-2 w-80 bg-zinc-900 '>
        <thead>
          <tr>
            <th>Ratio</th>
            <th>Water</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border border-zinc-700'>1:12</td>
            <td className='border border-zinc-700'>{coffeeAmount * 12}</td>
          </tr>
          <tr>
            <td>1:13</td>
            <td>{coffeeAmount * 13}</td>
          </tr>
          <tr>
            <td>1:14</td>
            <td>{coffeeAmount * 14}</td>
          </tr>
        </tbody>
      </table> */}
    </>
  );
}
