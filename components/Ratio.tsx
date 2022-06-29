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
      <table className='m-4 text-center text-white border-separate rounded-md table-auto border-spacing-2 w-80 bg-zinc-900 '>
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
      </table>
    </>
  );
}
