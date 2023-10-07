import React, { useState, useEffect } from "react";
import {
  Slider,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import calculator from "../images/Calculator.gif";
import AOS from "aos";
import "aos/dist/aos.css";
import { Skeleton } from "@mui/material";

function LoanCalculator() {
  // Initialize AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  // State variables for the loan calculator
  const [loanAmount, setLoanAmount] = useState(5000);
  const [interestRate, setInterestRate] = useState(1.0);
  const [loanTerm, setLoanTerm] = useState(1);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalAmountToPay, setTotalAmountToPay] = useState(0);
  const [loading, setLoading] = useState(true);

  // Calculate monthly payment and total amount to pay when loanAmount, interestRate, or loanTerm change
  useEffect(() => {
    function calculatePayment() {
      let rate = interestRate / 100 / 12;
      let term = loanTerm;
      let payment = (loanAmount * rate) / (1 - Math.pow(1 + rate, -term));
      setMonthlyPayment(Math.round(payment));
      setTotalAmountToPay(Math.round(payment * term));
    }

    calculatePayment();
  }, [loanAmount, interestRate, loanTerm]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container maxWidth="md" id="calc">
      <div
        className="title"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <Typography className="text-center " variant="h4" gutterBottom>
          Personal Loan Calculator
        </Typography>
      </div>
      <Grid container spacing={2} className="py-3">
        {/* Left column for loan calculator */}
        <Grid item xs={12} md={7} data-aos="zoom-in-right">
          <Card style={{ height: "340px" }} className="d-flex">
            <CardContent
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <div>
                <Typography>Loan Amount: ₹ {loanAmount}</Typography>
                {loading ? (
                  <Skeleton variant="text" width={200} height={25} />
                ) : (
                  <Slider
                    value={loanAmount}
                    onChange={(event, value) => setLoanAmount(value)}
                    valueLabelDisplay="auto"
                    step={1000}
                    min={5000}
                    max={100000}
                    sx={{ color: "#000" }}
                  />
                )}
              </div>
              <div>
                <Typography>Interest Rate: {interestRate}%</Typography>
                {loading ? (
                  <Skeleton variant="text" width={150} height={25} />
                ) : (
                  <Slider
                    value={interestRate}
                    onChange={(event, value) => setInterestRate(value)}
                    valueLabelDisplay="auto"
                    step={0.1}
                    min={1.0}
                    max={1.5}
                    sx={{ color: "#000" }}
                  />
                )}
              </div>
              <div>
                <Typography>Loan Term (days): {loanTerm} days</Typography>
                {loading ? (
                  <Skeleton variant="text" width={200} height={25} />
                ) : (
                  <Slider
                    value={loanTerm}
                    onChange={(event, value) => setLoanTerm(value)}
                    valueLabelDisplay="auto"
                    step={1}
                    min={1}
                    max={90}
                    sx={{ color: "#000" }}
                  />
                )}
              </div>
              <Typography variant="h6" gutterBottom>
                Monthly Payment: ₹{monthlyPayment}
              </Typography>
              {loading ? (
                <Skeleton variant="text" width={200} height={25} />
              ) : (
                <Typography variant="h6" gutterBottom>
                  Total Amount to Pay: ₹{totalAmountToPay}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
        {/* Right column for loan calculator image */}
        <Grid item xs={12} md={5} data-aos="zoom-in-left">
          <Card style={{ height: "340px" }}>
            <CardMedia component="img" image={calculator} alt="Personal Loan" />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LoanCalculator;
