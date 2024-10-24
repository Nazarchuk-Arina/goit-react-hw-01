const Message = ({ data, title }) => {
  return (
    <ul>
      <h2>{title}</h2>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default Message;
