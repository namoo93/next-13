export default function handler(request: any, response: any) {
  let date = new Date();
  return response.status(200).json(date);
}
