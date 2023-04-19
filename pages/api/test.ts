export default function handler(request: any, response: any) {
  if (request.method == 'POST') {
    return response.status(200).json('ok');
  }
  // return response.status(400).json('너탓');
  // return response.status(500).json('내탓');
}
