import style from "./index.module.scss";
import { Formik, Form, Field } from "formik";
import { FormRowGroup } from "../../../../components/Form-row";
import Button from "../../../../components/Button";

export const Filter = () => {
  return (
    <div className={style["filter--container"]}>
      <Formik
        initialValues={{ organization: "" }}
        onSubmit={() => {
          console.log("ok");
        }}
      >
        {() => (
          <Form>
            <div className={style["form--fields"]}>
              <FormRowGroup>
                <label>Organization</label>
                <Field name="organization" as="select">
                  <option>Lumen</option>
                </Field>
              </FormRowGroup>

              <FormRowGroup>
                <label htmlFor="username">Username</label>
                <Field name="username" placeholder="User" type="text" />
              </FormRowGroup>
              <FormRowGroup>
                <label htmlFor="date">Email</label>
                <Field name="date" type="email" />
              </FormRowGroup>
              <FormRowGroup>
                <label htmlFor="date">Date</label>
                <Field name="date" type="date" />
              </FormRowGroup>
              <FormRowGroup>
                <label htmlFor="phoneNumber">Phone Number</label>
                <Field
                  name="phoneNumber"
                  placeholder="Phone Number"
                  type="text"
                />
              </FormRowGroup>
              <FormRowGroup>
                <label>Status</label>
                <Field name="organization" as="select">
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>Blacklist</option>
                  <option>Pending</option>
                </Field>
              </FormRowGroup>
            </div>
            <div className={style["buttons"]}>
              <Button className="small--filled" type="submit">
                {" "}
                Filter
              </Button>
              <Button className="small--ghost" type="reset">
                {" "}
                Reset
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
