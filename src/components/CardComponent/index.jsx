import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
  
export default function MyCard() {
  return (
    <div className="card" style={{}}>
        <div className="card">
          <p>teste</p>
        </div>

      {/* <Card   
        style={{
          width: 300,
          backgroundColor: "#9798ce"
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 25 }}
            color="textSecondary"
            gutterBottom
            
          >      Temperatura       
          </Typography>

          <Typography
            style={{ fontSize: 25 }}
            color="textSecondary"
            gutterBottom
            
          > 
            24 graus C
          </Typography>
        </CardContent>
      </Card> */}
    </div>
  );
}