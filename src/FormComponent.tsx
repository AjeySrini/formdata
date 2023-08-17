import React from "react";

interface FormComponentProps {
  initialValues: {
    date: string;
    source: string;
    jobid: string;
    techname: string;
  };
  techContact: string;
  onTechContactChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasRemark: boolean;
  onHasRemarkChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  remarks: string;
  onRemarksChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({
  initialValues,
  techContact,
  onTechContactChange,
  hasRemark,
  onHasRemarkChange,
  remarks,
  onRemarksChange
}) => {
  return (
    <div>
      <div>
        <label>Date:</label>
        <input type="text" value={initialValues.date} readOnly />
      </div>
      <div>
        <label>Source:</label>
        <input type="text" value={initialValues.source} readOnly />
      </div>
      <div>
        <label>Job ID:</label>
        <input type="text" value={initialValues.jobid} readOnly />
      </div>
      <div>
        <label>Tech Name:</label>
        <input type="text" value={initialValues.techname} readOnly />
      </div>
      <div>
        <label htmlFor="techContact">Tech Contact:</label>
        <input
          type="text"
          id="techContact"
          value={techContact}
          onChange={onTechContactChange}
          required
        />
      </div>
      <div>
        <label>
          Has Remark:
          <input
            type="radio"
            name="hasRemark"
            value="yes"
            checked={hasRemark}
            onChange={onHasRemarkChange}
          />{" "}
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="hasRemark"
            value="no"
            checked={!hasRemark}
            onChange={onHasRemarkChange}
          />{" "}
          No
        </label>
      </div>
      {hasRemark && (
        <div>
          <label htmlFor="remarks">Remarks:</label>
          <input
            type="text"
            id="remarks"
            value={remarks}
            onChange={onRemarksChange}
            required
          />
        </div>
      )}
    </div>
  );
};

export default FormComponent;
