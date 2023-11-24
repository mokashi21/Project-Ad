import * as React from "react";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ReactApexChart from "react-apexcharts";
import TableImg from "./Tab.png";
import ChartImg from "./Chart.png";

function createData(Campaigns, Clicks, Cost, Conversions, Revenue) {
  return { Campaigns, Clicks, Cost, Conversions, Revenue };
}
function createData2(groups, Clicks, Cost, Conversions, Revenue) {
  return { groups, Clicks, Cost, Conversions, Revenue };
}
const rows2 = [
  createData2("Male", 348, "12,528", 42, "62,118"),
  createData2("Female", 692, "24,912", 35, "5,175"),
  createData2("Unknown", 105, "3,943", 3, "4,489"),
  createData2("Total", 1145, "41,383", 80, "71,782"),
];
const rows = [
  createData("Cosmetics", 712, "4,272", 8, "16,568"),
  createData("Serums", "3,961", "27,331", 115, "362,526"),
  createData("Facewash", "9,462", "76,831", 123, "266,800"),
  createData("Shampoos", 439, "2,151 ", 5, "11,029"),
  createData("Conditioners", "1,680", "3,864", 49, "175,245"),
  createData("Facewash2", "4,978", "29,370", 189, "623,106"),
  createData("Total", "26,510", "1,43,819", 499, "15,73,563"),
];

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [35, 45, 20],
      options: {
        chart: {
          type: "donut",
        },
        labels: ["Male", "Female", "Unknown"],
        responsive: [
          {
            breakpoint: 400,
            options: {
              chart: {
                width: 200,
                height: 200,
                marginLeft: 10,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: "50vh" }}
      >
        <div id="chart" style={{ width: "70%", height: "70%" }}>
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="donut"
          />
        </div>
      </Grid>
    );
  }
}

export default function DoubleTable() {
  const [sortConfig, setSortConfig] = React.useState({
    key: "Campaigns",
    direction: "asc",
  });
  const [sorting, setSorting] = React.useState({
    key: "Groups",
    direction: "asc",
  });
  const [showTable, setShowTable] = React.useState(true);
  const handleSort = (column) => {
    const direction =
      column === sortConfig.key && sortConfig.direction === "asc"
        ? "desc"
        : "asc";
    setSortConfig({ key: column, direction });
  };

  const handleSort2 = (column) => {
    const direction =
      column === sorting.key && sorting.direction === "asc" ? "desc" : "asc";
    setSorting({ key: column, direction });
  };
  const sortedRows = [...rows].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });
  const sortedRows2 = [...rows2].sort((a, b) => {
    if (a[sorting.key] < b[sorting.key]) {
      return sorting.direction === "asc" ? -1 : 1;
    }
    if (a[sorting.key] > b[sorting.key]) {
      return sorting.direction === "asc" ? 1 : -1;
    }
    return 0;
  });
  const handleToggle = () => {
    setShowTable(!showTable);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={1}
        sx={{
          maxWidth: 1350,
          padding: 1,
        }}
      >
        <Grid
          item
          xs={6}
          sm={10}
          md={6}
          lg={6}
          xl={6}
          sx={{
            height: 200,
          }}
        >
          <TableContainer
            sx={{
              marginTop: 5,
              marginLeft: 1,
              borderRadius: 1,
              border: "1px solid #888888",
            }}
            component={Paper}
          >
            <Grid
              sx={{
                paddingBottom: 2,
                border: "1px solid #888888",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  marginLeft: 2,
                  marginTop: 1,
                }}
              >
                Ad Insights
              </Typography>
            </Grid>
            <Table
              sx={{
                minWidth: 650,
                fontSize: 12,
              }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow sx={{}}>
                  <TableCell>
                    <TableSortLabel
                      sx={{ fontSize: 14 }}
                      active={sortConfig.key === "Campaigns"}
                      direction={
                        sortConfig.key === "Campaigns"
                          ? sortConfig.direction
                          : "asc"
                      }
                      onClick={() => handleSort("Campaigns")}
                    >
                      Campaigns
                    </TableSortLabel>
                  </TableCell>
                  <TableCell align="right">
                    <TableSortLabel
                      sx={{ fontSize: 14 }}
                      active={sortConfig.key === "Clicks"}
                      direction={
                        sortConfig.key === "Clicks"
                          ? sortConfig.direction
                          : "asc"
                      }
                      onClick={() => handleSort("Clicks")}
                    >
                      Clicks
                    </TableSortLabel>
                  </TableCell>
                  <TableCell align="right">
                    <TableSortLabel
                      sx={{ fontSize: 14 }}
                      active={sortConfig.key === "Cost"}
                      direction={
                        sortConfig.key === "Cost" ? sortConfig.direction : "asc"
                      }
                      onClick={() => handleSort("Cost")}
                    >
                      Cost
                    </TableSortLabel>
                  </TableCell>
                  <TableCell align="right">
                    <TableSortLabel
                      sx={{ fontSize: 14 }}
                      active={sortConfig.key === "Conversions"}
                      direction={
                        sortConfig.key === "Conversions"
                          ? sortConfig.direction
                          : "asc"
                      }
                      onClick={() => handleSort("Conversions")}
                    >
                      Conversions
                    </TableSortLabel>
                  </TableCell>
                  <TableCell align="right">
                    <TableSortLabel
                      sx={{ fontSize: 14 }}
                      active={sortConfig.key === "Revenue"}
                      direction={
                        sortConfig.key === "Revenue"
                          ? sortConfig.direction
                          : "asc"
                      }
                      onClick={() => handleSort("Revenue")}
                    >
                      Revenue
                    </TableSortLabel>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedRows.map((row) => (
                  <TableRow
                    key={row.Campaigns}
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                        fontSize: 12,
                      },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.Campaigns}
                    </TableCell>
                    <TableCell align="right">{row.Clicks}</TableCell>
                    <TableCell align="right">USD {row.Cost}</TableCell>
                    <TableCell align="right">{row.Conversions}</TableCell>
                    <TableCell align="right">USD {row.Revenue}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid
          item
          xs={3}
          sm={10}
          md={6}
          lg={6}
          xl={6}
          sx={{
            marginTop: 1,
          }}
        >
          {showTable ? (
            <TableContainer
              sx={{
                marginTop: 4,
                marginLeft: 2,
                boxShadow: 3,
                border: "1px solid gray",
                height: "30em",
              }}
              component={Paper}
            >
              <Grid
                sx={{
                  paddingBottom: 2,
                  border: "1px solid gray",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    marginLeft: 2,
                    marginTop: 1,
                  }}
                >
                  Ad Insights
                </Typography>
              </Grid>
              <Table
                sx={{
                  minWidth: 650,
                  fontSize: 12,
                }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow sx={{}}>
                    <TableCell>
                      <TableSortLabel
                        sx={{ fontSize: 14 }}
                        active={sorting.key === "Groups"}
                        direction={
                          sorting.key === "Groups" ? sorting.direction : "asc"
                        }
                        onClick={() => handleSort2("Groups")}
                      >
                        Groups
                      </TableSortLabel>
                    </TableCell>
                    <TableCell align="right">
                      <TableSortLabel
                        sx={{ fontSize: 14 }}
                        active={sorting.key === "Clicks"}
                        direction={
                          sorting.key === "Clicks" ? sorting.direction : "asc"
                        }
                        onClick={() => handleSort2("Clicks")}
                      >
                        Clicks
                      </TableSortLabel>
                    </TableCell>
                    <TableCell align="right">
                      <TableSortLabel
                        sx={{ fontSize: 14 }}
                        active={sorting.key === "Cost"}
                        direction={
                          sorting.key === "Cost" ? sorting.direction : "asc"
                        }
                        onClick={() => handleSort2("Cost")}
                      >
                        Cost
                      </TableSortLabel>
                    </TableCell>
                    <TableCell align="right">
                      <TableSortLabel
                        sx={{ fontSize: 14 }}
                        active={sorting.key === "Conversions"}
                        direction={
                          sorting.key === "Conversions"
                            ? sorting.direction
                            : "asc"
                        }
                        onClick={() => handleSort2("Conversions")}
                      >
                        Conversions
                      </TableSortLabel>
                    </TableCell>
                    <TableCell align="right">
                      <TableSortLabel
                        sx={{ fontSize: 14 }}
                        active={sorting.key === "Revenue"}
                        direction={
                          sorting.key === "Revenue" ? sorting.direction : "asc"
                        }
                        onClick={() => handleSort2("Revenue")}
                      >
                        Revenue
                      </TableSortLabel>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sortedRows2.map((row2) => (
                    <TableRow
                      key={rows2.groups}
                      sx={{
                        "&:last-child td, &:last-child th": {
                          border: 0,
                          fontSize: 12,
                        },
                      }}
                    >
                      <TableCell component="th" scope="row2">
                        {row2.groups}
                      </TableCell>
                      <TableCell align="right">{row2.Clicks}</TableCell>
                      <TableCell align="right">USD {row2.Cost}</TableCell>
                      <TableCell align="right">{row2.Conversions}</TableCell>
                      <TableCell align="right">USD {row2.Revenue}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Grid
                align="right"
                sx={{
                  marginLeft: 1,
                  marginTop: "5em",
                  paddingBottom: 1,
                  paddingRight: 2,
                }}
              >
                <button onClick={handleToggle}>
                  {showTable ? (
                    <div>
                      <img width={30} height={30} src={ChartImg} alt="" />
                    </div>
                  ) : (
                    "Show table"
                  )}
                </button>
              </Grid>
            </TableContainer>
          ) : (
            <TableContainer
              sx={{
                marginTop: 4,
                marginLeft: 2,
                height: "30em",
                border: "1px solid #888888",
              }}
              component={Paper}
            >
              <Grid
                sx={{
                  border: "1px solid #888888",
                  paddingBottom: 2,
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    marginLeft: 2,
                    marginTop: 1,
                  }}
                >
                  Ad Insights
                </Typography>
              </Grid>
              <ApexChart />
              <Grid
                align="right"
                sx={{
                  marginLeft: 1,
                  marginTop: "1em",
                  paddingBottom: 1,
                  paddingRight: 2,
                }}
              >
                <button onClick={handleToggle}>
                  {showTable ? (
                    "Show Chart"
                  ) : (
                    <div>
                      <img width={25} height={25} src={TableImg} alt="" />
                    </div>
                  )}
                </button>
              </Grid>
            </TableContainer>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
