function Card({ plan }) {
  return (
    <div className="flex flex-col items-center justify-between md:w-80 w-10/12 bg-gray rounded-md space-y-6 py-6">
      <h1 className="text-xl">{plan?.title}</h1>
      <h1 className="text-4xl font-bold">
        {plan?.price}
        <span className="text-sm">
          {plan.title === 'Pro' ? '/ month' : null}
        </span>
      </h1>
      {plan?.title === 'Pro' ? (
        <div>
          <select
            className="bg-gray border border-slate-100 w-52 h-10 text-md px-4 "
            name=""
            id=""
          >
            <option value="2500 MAUs">2500 MAUs</option>
          </select>
          <p className="text-sm text-accent">Monthly active users</p>
        </div>
      ) : null}
      <ul className="list-disc marker:text-accent space-y-4 text-sm">
        {plan?.features.map((feature) => (
          <li>{feature}</li>
        ))}
      </ul>
      <Button title={plan?.title} />
    </div>
  );
}

function Button({ title }) {
  const accented = title === 'Pro' ? 'bg-accent' : null;

  return (
    <button
      className={`${accented} w-8/12 h-10 border rounded-sm border-solid border-1 border-accent`}
    >
      {title.toLowerCase() === 'enterprise' ? 'Contact us' : 'Choose plan'}
    </button>
  );
}

export default Card;
