// A mock function to mimic making an async request for data
// export function fetchCount(amount = 1) {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve({ data: amount }), 500)
//   );
// }

var sleep = ms=>new Promise((resolve,reject)=>setTimeout(resolve, ms));

export const fetchCount= async(amount = 1)=> {
  try {
    await sleep(1000);
  return ({ data: 1 } )
  } catch (error) {
    return error
  }
}
