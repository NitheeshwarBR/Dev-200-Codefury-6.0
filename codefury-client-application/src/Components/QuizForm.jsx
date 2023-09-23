import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";

function AssesmentForm() {
  return (
    <div>
      <center>
        <h1>Digital Well-being Assessment</h1>
      </center>
      <FormControl>
        <h2>Section 1: Digital Device Usage</h2>
        <Typography>
          1] How many hours per day, on average, do you spend using digital
          devices (e.g., smartphones, tablets, computers)?
        </Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="Less than 1 hour"
            control={<Radio />}
            label="Less than 1 hour"
          />
          <FormControlLabel
            value="1-2 hours"
            control={<Radio />}
            label="1-2 hours"
          />
          <FormControlLabel
            value="3-4 hours"
            control={<Radio />}
            label="3-4 hours"
          />
          <FormControlLabel
            value="5-6 hours"
            control={<Radio />}
            label="5-6 hours"
          />
          <FormControlLabel
            value="More than 6 hours"
            control={<Radio />}
            label="More than 6 hours"
          />
        </RadioGroup>
        <Typography>
          2] How often do you check your smartphone or other digital devices
          within an hour of waking up in the morning?
        </Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="Never " control={<Radio />} label="Never " />
          <FormControlLabel
            value="Rarely "
            control={<Radio />}
            label="Rarely "
          />
          <FormControlLabel
            value="Occasionally "
            control={<Radio />}
            label="Occasionally "
          />
          <FormControlLabel
            value="Frequently "
            control={<Radio />}
            label="Frequently "
          />
          <FormControlLabel
            value="Always  "
            control={<Radio />}
            label="Always  "
          />
        </RadioGroup>
        <Typography>
          <h2>Section 2: Social Media and Online Interactions</h2>
          3] HHow often do you compare your life to others' on social media?
        </Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="Never " control={<Radio />} label="Never " />
          <FormControlLabel
            value="Rarely "
            control={<Radio />}
            label="Rarely "
          />
          <FormControlLabel
            value="Occasionally "
            control={<Radio />}
            label="Occasionally "
          />
          <FormControlLabel
            value="Frequently "
            control={<Radio />}
            label="Frequently "
          />
          <FormControlLabel
            value="Always  "
            control={<Radio />}
            label="Always  "
          />
        </RadioGroup>
        <Typography>
          4] How often do you feel pressured to respond immediately to messages
          or notifications on social media?
        </Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="Never " control={<Radio />} label="Never " />
          <FormControlLabel
            value="Rarely "
            control={<Radio />}
            label="Rarely "
          />
          <FormControlLabel
            value="Occasionally "
            control={<Radio />}
            label="Occasionally "
          />
          <FormControlLabel
            value="Frequently "
            control={<Radio />}
            label="Frequently "
          />
          <FormControlLabel
            value="Always  "
            control={<Radio />}
            label="Always  "
          />
        </RadioGroup>
        <h2>Section 3: Online Content Consumption</h2>
        <Typography>
          5] How often do you find yourself mindlessly scrolling through content
          on the internet?
        </Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="Never " control={<Radio />} label="Never " />
          <FormControlLabel
            value="Rarely "
            control={<Radio />}
            label="Rarely "
          />
          <FormControlLabel
            value="Occasionally "
            control={<Radio />}
            label="Occasionally "
          />
          <FormControlLabel
            value="Frequently "
            control={<Radio />}
            label="Frequently "
          />
          <FormControlLabel
            value="Always  "
            control={<Radio />}
            label="Always  "
          />
        </RadioGroup>
        <Typography>
          6] How often do you feel overwhelmed or anxious due to the volume of
          information you consume online?
        </Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="Never " control={<Radio />} label="Never " />
          <FormControlLabel
            value="Rarely "
            control={<Radio />}
            label="Rarely "
          />
          <FormControlLabel
            value="Occasionally "
            control={<Radio />}
            label="Occasionally "
          />
          <FormControlLabel
            value="Frequently "
            control={<Radio />}
            label="Frequently "
          />
          <FormControlLabel
            value="Always  "
            control={<Radio />}
            label="Always  "
          />
        </RadioGroup>
        <h2>Section 4: Digital Well-being Practices</h2>
        <Typography>
          7] Do you practice digital detox (periods where you intentionally
          disconnect from digital devices)?
        </Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="Regularly  "
            control={<Radio />}
            label="Regularly  "
          />
          <FormControlLabel
            value="Occasionally  "
            control={<Radio />}
            label="Occasionally  "
          />
          <FormControlLabel
            value="Rarely  "
            control={<Radio />}
            label="Rarely  "
          />
          <FormControlLabel
            value="Never  "
            control={<Radio />}
            label="Never  "
          />
        </RadioGroup>
        <Typography>
          8] Do you engage in mindfulness or relaxation exercises to manage
          digital-related stress?
        </Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="Regularly  "
            control={<Radio />}
            label="Regularly  "
          />
          <FormControlLabel
            value="Occasionally  "
            control={<Radio />}
            label="Occasionally  "
          />
          <FormControlLabel
            value="Rarely  "
            control={<Radio />}
            label="Rarely  "
          />
          <FormControlLabel
            value="Never  "
            control={<Radio />}
            label="Never  "
          />
        </RadioGroup>
        <h2>Section 4: Digital Well-being Practices</h2>
        <Typography>
          7] Do you practice digital detox (periods where you intentionally
          disconnect from digital devices)?
        </Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="Regularly  "
            control={<Radio />}
            label="Regularly  "
          />
          <FormControlLabel
            value="Occasionally  "
            control={<Radio />}
            label="Occasionally  "
          />
          <FormControlLabel
            value="Rarely  "
            control={<Radio />}
            label="Rarely  "
          />
          <FormControlLabel
            value="Never  "
            control={<Radio />}
            label="Never  "
          />
        </RadioGroup>
        <Typography>
          8] Do you engage in mindfulness or relaxation exercises to manage
          digital-related stress?
        </Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="Regularly  "
            control={<Radio />}
            label="Regularly  "
          />
          <FormControlLabel
            value="Occasionally  "
            control={<Radio />}
            label="Occasionally  "
          />
          <FormControlLabel
            value="Rarely  "
            control={<Radio />}
            label="Rarely  "
          />
          <FormControlLabel
            value="Never  "
            control={<Radio />}
            label="Never  "
          />
        </RadioGroup>
        <h2>Section 5: Online Relationships and Social Interaction</h2>
        <Typography>
          9] How often do you feel that your online relationships are as
          fulfilling as your offline relationships?
        </Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="Regularly  "
            control={<Radio />}
            label="Regularly  "
          />
          <FormControlLabel
            value="Occasionally  "
            control={<Radio />}
            label="Occasionally  "
          />
          <FormControlLabel
            value="Rarely  "
            control={<Radio />}
            label="Rarely  "
          />
          <FormControlLabel
            value="Never  "
            control={<Radio />}
            label="Never  "
          />
        </RadioGroup>
        <Typography>
          10] Do you find yourself avoiding face-to-face social interactions in
          favor of online interactions?
        </Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="Never   "
            control={<Radio />}
            label="Never   "
          />
          <FormControlLabel
            value="Rarely   "
            control={<Radio />}
            label="Rarely   "
          />
          <FormControlLabel
            value="Occasionally   "
            control={<Radio />}
            label="Occasionally   "
          />
          <FormControlLabel
            value="Frequently   "
            control={<Radio />}
            label="Frequently   "
          />
          <FormControlLabel
            value="Always    "
            control={<Radio />}
            label="Always    "
          />
        </RadioGroup>
        <h2>Section 6: Sleep and Screen Time</h2>
        <Typography>
          11] How often do you use digital devices within an hour before going
          to bed?
        </Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="Regularly  "
            control={<Radio />}
            label="Regularly  "
          />
          <FormControlLabel
            value="Occasionally  "
            control={<Radio />}
            label="Occasionally  "
          />
          <FormControlLabel
            value="Rarely  "
            control={<Radio />}
            label="Rarely  "
          />
          <FormControlLabel
            value="Never  "
            control={<Radio />}
            label="Never  "
          />
        </RadioGroup>
        <Typography>
          12]How many nights per week do you experience difficulty falling
          asleep or staying asleep due to digital device use?
        </Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="Never   "
            control={<Radio />}
            label="Never   "
          />
          <FormControlLabel
            value="Rarely   "
            control={<Radio />}
            label="Rarely   "
          />
          <FormControlLabel
            value="Occasionally   "
            control={<Radio />}
            label="Occasionally   "
          />
          <FormControlLabel
            value="Frequently   "
            control={<Radio />}
            label="Frequently   "
          />
          <FormControlLabel
            value="Always    "
            control={<Radio />}
            label="Always    "
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
export default AssesmentForm;
