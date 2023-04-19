import { connectDB } from "@/util/database";

export default async function List() {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  console.log(result);
  return (
    <div className="list-bg">
      {result.map((item, idx) => (
        <div className="list-item" key={idx}>
          <h4>{item.title}</h4>
          <p>{item.date}</p>
        </div>
      ))}
    </div>
  );
}
