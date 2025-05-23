"use client";
import React, { useState } from "react";
import { HttpException, type VovkOutput, type VovkQuery } from "vovk";
import { UserRPC } from "vovk-client";

const UserForm = () => {
  const [disableClientValidation, setDisableClientValidation] = useState(false);
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(35);
  const [email, setEmail] = useState("john@example.com");
  const [id, setId] = useState("a937629d-e8f6-4b1e-a819-7669358650a0");
  const [notify, setNotify] = useState<
    VovkQuery<typeof UserRPC.updateUser>["notify"]
  >(
    "sms" as "email", // set error value by default
  );
  const [output, setOutput] = useState<
    VovkOutput<typeof UserRPC.updateUser> | HttpException | null
  >(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    void UserRPC.updateUser({
      body: {
        email,
        profile: {
          name,
          age,
        },
      },
      query: { notify },
      params: { id },
      disableClientValidation,
    })
      .then(setOutput)
      .catch(setOutput);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Body</h3>
      <div>
        <label>User email</label>
        <input
          name="email"
          placeholder="john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>User full name</label>
        <input
          name="name"
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>User age</label>
        <input
          name="age"
          type="number"
          placeholder="35"
          min={0}
          max={120}
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
      </div>

      <h3>Params</h3>
      <div>
        <label>User ID</label>
        <input
          name="id"
          type="text"
          placeholder="123e4567-e89b-12d3-a456-426614174000"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <h3>Query</h3>
      <div>
        <label>Notification type</label>
        <select
          name="notify"
          value={notify}
          onChange={(e) =>
            setNotify(e.target.value as "email" | "push" | "none")
          }
        >
          <option value="none">None</option>
          <option value="email">Email</option>
          <option value="push">Push</option>
          <option value="sms">SMS (error)</option>
        </select>
      </div>
      <br />
      <label>
        <input
          type="checkbox"
          onChange={({ target }) => setDisableClientValidation(target.checked)}
          checked={disableClientValidation}
        />{" "}
        Disable client-side validation
      </label>
      <button type="submit">Submit</button>
      {output && (
        <output>
          <strong>Response:</strong>{" "}
          {output instanceof HttpException ? (
            <div className="text-red-500">{output.message}</div>
          ) : (
            <div className="text-green-500">Success</div>
          )}
        </output>
      )}
    </form>
  );
};

export default UserForm;
