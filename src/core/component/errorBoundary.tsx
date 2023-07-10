import React, { Component, ErrorInfo, ReactNode } from "react";
import { Grid, Button } from "@mui/material";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

interface GridProps {
  container?: boolean;
  spacing?: number;
  align?: "flex-start" | "center" | "flex-end";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Grid className="text-center" style={{ marginTop: "20vh" }}>
          <Grid
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Grid item>
              <Grid>
                <img
                  src="/public/default/something.svg"
                  alt="Something's Went Wrong..!!"
                  width="350px"
                />
                <Grid
                  style={{ marginTop: "20px" }}
                  onClick={(e) => (window.location.href = "/")}
                >
                  <Button variant="contained" size="small">
                    Go To Home
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
