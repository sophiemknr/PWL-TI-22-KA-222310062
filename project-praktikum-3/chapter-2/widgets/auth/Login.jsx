import React from "react";
import { ButtonPrimary } from "../components/ButtonUI";

export default function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="card" style={{ width: "32rem" }}>
        <div className="card-body">
          <h2 className="card-title text-center">Login</h2>
          <div class="mb-3">
            <label for="username" class="form-label">
              Username
            </label>
            <input type="email" class="form-control" id="username" />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="password" />
          </div>
          <div className="mb-3">
            <ButtonPrimary items={{ btn_class: "btn-primary", type: "button" }}>
              Login
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}
