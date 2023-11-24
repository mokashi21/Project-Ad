import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/base";
const CenteredCards = () => {
  const dispatch = useNavigate();
  const [checked, setChecked] = React.useState([false, false]);

  const handleCheckboxChange = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };
  const handleNext = () => {
    const selectedPath = checked[0]
      ? "/text-ads"
      : checked[1]
      ? "/media-ads"
      : "/";
    dispatch(selectedPath);
  };

  return (
    <Grid
      sx={{
        bgcolor: "#FFF",
        height: "100vh",
        width: "90%",
        marginLeft: 10,
        marginTop: 4,
        border: "1px solid #575757 ",
        borderRadius: 6,
      }}
    >
      <Typography
        sx={{
          marginLeft: 2,
          fontSize: 16,
          fontWeight: 400,
          marginTop: 3,
        }}
      >
        Create Ads
      </Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        height="100vh"
        xs={12}
      >
        <Grid item>
          <Card
            sx={{ minWidth: 275, margin: 5 }}
            onClick={() => handleCheckboxChange(0)}
          >
            <CardContent>
              <Checkbox
                checked={checked[0]}
                onChange={() => handleCheckboxChange(0)}
              />
              <img
                src="data:image/png;base64,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"
                alt="Card 1"
                style={{ width: "100%" }}
              />
              <Typography
                variant="h6"
                align="center"
                component="div"
                sx={{
                  fontSize: 10,
                  fontWeight: 400,
                  color: "#888888",
                  marginTop: 1,
                }}
              >
                Create
              </Typography>
              <Typography
                variant="h5"
                component="div"
                align="center"
                sx={{
                  marginTop: 1,
                }}
              >
                Text Ad
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card
            sx={{ minWidth: 205, margin: 5 }}
            onClick={() => handleCheckboxChange(1)}
          >
            <CardContent>
              <Checkbox
                checked={checked[1]}
                onChange={() => handleCheckboxChange(1)}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPIAAADQCAMAAAAK0syrAAACWFBMVEX///+AgIDv7+/19fXa2trp6enm5uZ9fX2Pj4/s7Oz6+vp4eHi1tbWDg4PZ7ff///3///j4///K5+/S7Pbk7e/T4+vL4uf///Xo7unz//+ju6ft+v/A0MOUlJS+vr70+/7J3/Tn//////C5ubmnp6ecnJz19e5eWbzX6/zj8Prv7/e11vHW4/S2uOChp9iiwu7/8+SChMz/8e1+ecF9ktWKfr6z2Ob/8Nfi3s2roqbCsqayrajo0rqcoarCwrvJycmwtb2gqbrq0Ni7osiamc+XhtPi3e7MzrunsKLh2NG0yeCZfLupm8u+sdDbxdOPqeDRt897aLtlbcOeisLk1d2wkr9/cLjMy+W+xeZUQa7PsMPO1u7FpcD04t+9wua6s9xedMmkgsD95N3czeJnQK1ybL1OO65HUbsvNLCLWa2auOjbscRHX8NcMqpuitJwWLNqk9hqSay6l8I3K7AgTcJ2nuCQZ6xCDagAM7Y0acenm76QiL0QAKtALKxfdLt6R6IAJbRJcs6PpZazq5DSx5qhs5R7hnCZucHv2LJuh4Ogl3x1p56ktpeCmobW1bORs7R5i2N8pa+RlmyXyNy9s4JQckQRe4PU27qTyeGHsabKvIYpXQAIc2F5k4+00NCulYPPs5Z4g5uasMpvbYO5noZ6ka54WP5+fvpRQP+En/YljG+8m/v3nZL2y5eWjfm3sfj4pbX7ZDr8jKD3n4z/Q2j5tkr2zJL/qFf9TUoRCP/rw+1gbPv/BiX+Zo1gUP/5iFz+XHD7cF73wWv/rXL8SzH0wrp0pcFHeZmc2kn0AAAYoElEQVR4nO2di0MaV77HTxgkQggDEQREARFHQEU0CsMwMKAsj9Hg+xGVJCbbJjVtcpNs7N4mu5sFE23aaI25u+3eGyRumu2+d7u7d/fe3u3dx+3uv3V/Z1Bj1bRJG4E28xWYx+/3O3M+c86cc2CQg5AoUaJEiRIlSpQoUaJEPT/1NjWddWysk33GY5v7e5zwom9HKNW83R3bU01NTf17pdXNb6wMWHFqw6atdZQeHHJuunUMN3UKJjTSgl8Gh6zomGbDmLZuermF2O5OpI/2OAc0PYX44R3H7nFs3xptGmq6sJXXlr2Rxywul2IcpVvI8Qk07jpuxUs0Mj6Mk0odb0aTba0WpD45hUac5PjIcUhmesLlsuCtCtdJJ5gmIOuw0tE62YbOtEKuT0zj05S+1AYJwXrHyRb1xamRoY0jqi9OuAZOQVwLOQe577jolDVpL02RZ1o1itj4zFWUbjWBdaQTzmE/6hkyne484/qmdaYF8oHIMadrpjl2pgXC0Tgix884yWNTsCYDAIRcrpdaXCNChlvQqHVv5MFoNIou84PG0fautt7Yy9bRzuH+7rN951Q4fdsQmjzb16R5JTrYPN2sHhw5DslMt0ejLR1Dk7Ops+6zmkH3WNv5c32vql9zH2+bPNV3oeO4+zsYeVT7EkrDum7MfRESwwiFuiCs6C+6B4+8AqvqXjecruMT053DpzrOuec6000nh/ABwUa1k10DzZPWmalvNs8MDV/AWdKg0eaZU7pX3IOOYdXpq6Oqmf7etpn60X/x4OJVH9VA5s+Sr0QvWS8/CflEa6tG/Vqb+ihOz9ilvtTe/mqPFQ1DLtNX2q+oJpvRaOwC6ujEyKgLQgb6T7S2oPPfQqk21GNNHX25/3wbOdZ9Fbbn2tuvjLQhXMr619uvNJ9vQ5eto01uDUoPQdUdealQdANXvp0+1z7YX6j0Z944qunVjHRd/NeOdriOpofaj+tOoTQ+M8Pp/nT/jHFGNaeZqdIPQha/d+VKJ5pTnT7XPna1u+1y1aj0XPvRU91tb3QONBeQLzvQaPUFdPrqk5AxA0ofbSfHTGpdr3GMHJyKQQ0lBwF5dCI2cDU1i3plTVA2k222swhODJrGdZ7sHVOlrqJe6avkZP/5ZvVY+vvoclvvRMwNxTkDR5/sj42cgvPQa425ZmZRCge5xmNCTUa2pvSrsTNTGDkdRWjG0YvGHKdfBWQo1H7XSQMcEBfaZJdVf60dCcgqAblLOLbzdFPLmSnq2hDUpeMtZ07YBlt7xowbyM3oFcMQ6n4i8ms3blznB03Tbd1XrljHjHNXU98516a+dPaiA3XA1acefOPo6/1o+vrLjvTr3z2LvgdX3/T1G9dPTc52DKVeev0qOXejqROQBzWjN8ba0i9f6Sfnrgw2I/1xKNU5x9yVMevlG2dVaPrx8Ucu3Xi5FY3eOOtIfduCyNErN+AkXZi+/uq3ALn7hnzwxnc1k9eP4lLuuK5BM/2oVzV6YcahbwLaQUiWnHMK4Qgu/BnH5JVzE+h7zanvCw3FS8aOS9evosvXz5qedC1/GUFz9aIpNVHqHHwRGWo2VFvqnBRNNQhJYZHEK0+jxMbCtjnqSBTGEGzVLle6NpOBEce8CmXrN/d5FuaP6B676HOJT4Vk37vp3b7twcOPRSttebrMPZ1qkOe2lYzfqq8RMrS46nvTeIu87Z33xp36xE3vverl+bcyxsTbC/Nv3TFla960ZTIqWCyt0JmM4T69/E514ubq4nu3DJmbVUh9+2Z19qZ3/r13au6jkMG4uArIVsXt+kSNd6nmvub2zZX53MLtmhUPTuWm11MNyJ7MnXph193VrAllDYlMFZiWMsvZ95Zyt2oW7q3e02buqMAFkdmam7kvj8zWLvu8WQGZTCSWQ/F4Jle9kM2F0OJbby/o/001X7/opRMr81a2dgEl5t97O7eMSxmO7l38AZQynV3IILb65oIFAaJvFXysS6qssQF57lto7fxC7a0fvvX2sj50Z+ld28J89UICZZYgleyyiTUBcrbKh3fFHYsYeT7x3tsLYMog9KOqxRwcMe64l6iyLSQ0tzXI9+//4fxcps9FTlTfrN1ARksr+QXbLcMtY3Yh6wUAUsve8QJAfMWDkXPL6vtLXr0hg9708feqKGM2U5XwrdAr2fpstXZpAflW1PSKfnneOl+V/WGzZ1lDAnIVyv5wgdTeNt2mV3wrP8otZwDZq9cafPdD+EJZ8i7mEpo7sABkNZjUWpkHkpTdA+T7ZGbJei/kXQTkO5qNqv4lkdXVyFMdz2kEZE+1pwqFSA7RVbSJQ/EaZwhx95ZzKJ7L0U5aRdfkyPiyBRbqWnUiR+VsuSVdvDanTyRM8RqLFEfQ8HDSpmTSSNfUVMMlbUJxo7A/VM/WVNNaKQeHiC9DgBYH1FjiC6gWhVA82wwRTjJeY6JrVJ4aOKLHcCeh8izQgosm9KVpC8gGwiChCIK4+USX+d0t036IFhq7HdIv78ORajdk2Ie0y1Qd3LZzSyY53IWQMpkFUfLHvUnyib0Eibs4ylXY2Fx+WpQMqR9fgR0ct2c2IBceztRB6HZa1DLIj5AOt8uGkEyze9/nyBZUB20RYZV1IH0QMU7MwagQm9t6h61e458UTx+GvLIbZrZ5LxfSb2QeI+cd7F6JQagnQvmZ6pZNt62DS/MqPx5Y+y3M7rZrTejyWesTAffIz1rY5HtAKSvpB7d5pD7cENRHbJEwo/WvcZG1wDprf6BBtM7Pah/4wn67IRhGfrv0MBOprPcHIHshmreBa13YIhz5oT3IeCFsLRcI8AG7k7FDyXjqeI+/kV5nuR/rUD7S2MIGw6ySZ+1hsIWD8WCdwb9mFfLNStfB8tAeecgzdhXy8HkrE1nDKSLEBJ0oENBV5vwBXSDAHWbWweWhMgKpYe89qsDeUluoOtu6p6GS5nEpR+CgAjLN+7hIgIwEEJxhJrxWHW5QxoNwrLBv3ROO+HiGftDAI31l6H0f77MGNpAZI5j8qJFRV5rDSaUzqcQ5WdOwVjbMAw8UX5UnsqZhpErOowRkuqEu5MibrayA3MFII2vmCGP051U4VN0QUnIRKGUygkiLGqxIHfQ9aAhB6mH1G0mlClz9Goax0sqnRrYFuYjtAR1Z43gWlzLnN9aFwhul7FdH2HClxhNBtkil532bXykL+43+gDTiW2fq/aEWnM28zr8WDvudMlw7BeS1hnXGGAjxZoYPhXAt9ms8wUZDXTaHkdcZng1HklyENgc1iF2oDFlxElakt4fCTO06Y+aBg+VDDITm+YfaSJ73699Haj/nN/lDUj/pD+n8IS6ofwNc1oxBOhxh1+FAnt0N/hNqNoGQAv4QXiAFoUCkgsT7hV0oaQgicssXHBWbFmEJD3Jjt7AXu6r9pkK6hUdBCsEHiyiEEcJDWC0kUQjBDsKrYiu04CMYCumBc8G44aIoeG9l80vK0/DMwx2hERclSpQoUaJEiRIlSpQoUaJEiRIlSpQoUWUu4bNqELElYVOx+Tn010EKQl4hlXJcQ4Pd3tjYWFlZeQDr0JaETdhd19hotyuVZk4qlcklxOenXG4igNOstNdVVh4+KJAd3NKBvbRlLTgfOAynwA74MkmpST5fhIwz2ysPCHl/IuBTaIMfEqhsVHJSeam59pKCkHLKuo0C/aKgT6DHqVbazVJ5+VzxcmlDY6UA+1xZd4AD+WEo8YqSX+cVnL3y4L7Cfhocc5ulJStugrMf2N+y3Zsbjllnrig+r9xch9vWEgmXtrKohS3hSsm7hX1YKSsSsLTxQMl5Czp4qG7PL0w9b+C6MuEVdPDQAW6f67esrIAFAfR+EjeUHTDWocZ9G5gqGg+Vmm5vHTy8T+2YorIci1jQwUP78yUjZZmWMdbBw/vRiMnKmBiu54Z9QObKGvlg3T4gK8v2ShZ0UEQWkUVkEVlEFpHLVSKyiCwiPzPywXJSUZAry0rFQD4kJcpIisNFQZaUkQgRWUQuOTJ14uQUtXNf7dca+dGjn3zwU0pCEFu8BOH7GSEhPivoq4xM/fyneor4iZb6xYcuieSXv3RJYr9q/TUgp3/xmy8MXebIj3REbDym/e2Hv/u96w+//M8/uj7+6U8+8P2M+tNvfvfhF2Uue2Tq54/+q/r3RuNvu//oMv3hvz+yER/7fsb+z5/+9HvL1xP5V1dtNtujTyNDKbN/llRUfME0yxxZIvn4o199/JHzf//y179Y/vb3v/2dePTRI1yx/+/Dv/7561mxcSf16wlKYvzkE1hnWZdkvPXEx9BJGT755GvafAnQ2zdcjz74YBbv+dp2Unso5to5MnlWfeWQv7xEZBFZRBaRnxFZXnpVyIuJLJeWQtVHdkhWRGRZCb4oiwidaoeqi4gsLcUXwUVkEflrjczxVS8WsvbBPxb+aX2hkLl/OFWhf7xQyGZATsLzBULW/nO1+sG7LxSySrcCF/O7LxRy4YJ+4ZBfrE6qVMgyWQm+MCDXVX1aR3TFRJbLSiDtThX1zWOJPwvZkIhcamTis25BENhO7HWbgtgMfZo7GMVHlo8TMmhBYo/zQIGtQiZJ6oik2awjQuYti1wqgyAwc+AVMmvlIbNZmzTrNu0VuB+QSkJmDofiFx1BhbjPBi86MjF9SpuakFDD2sfIazw8iIfvW/JWWZDh6chmnukI+z5B/1hLH+IJv44O0pEKGR2Rr6k2I4PwaDQEKxg+3yKTsxHZmi6gY9c/k7noyNS1kbadyMGwJ8B7IowOI9OV4S0TIPurmKCLwT+QTsgq6Ep72FBn120iEUxLvtpvCBJUMB+06/wmiS/CBMNlVsrdp/pOpSYoqu/xdUcFmVCIzwcD6/mwWSujkg+2lXIubPYbDioPGSIUd5AOK4gKrWzN+vic+DUYGc6Xg1AEnAQdkVHxSFmVMjWso3re6DzZ0tvaulmYVJB+wIYrLYpKyDfBhEPhx8h5fk3XyPIKdh32B+k6s1naaPY7N7NPPFynGg2HzQEdnK0wHTT7tdvjywJZgj85hyFJhVz2uAGX4734gY24JdtmwUYhhsABMLSAaPmnEOQQUYHTxCaM9Dk9Q5l1UsWQiCwiP1/kkryr2K0K8WbrviLLK8pAxb3ZKlGUgYhiVuxS3GvdQ8UsZRG5VBKRn7t2IysIYvPXPHb8qsdeP/IB3s9wNIVlr9UdKjpy93dbT25OiBfT9G2s9dYj1PFNK+qxPg4dALeeaGvr7ryfvrrhgSdqnhbmj8dTRqORaN9m/HTrsaiw0rNr0q/iI+NsDmt6TMeiEwOxl1Up9wl0zD1oBICJTjTdGXV29EVNA84RHs973+OAU+G2RVNuvL/PkXJfc3ZER/s7+tzGEXdvM0LqYfA55j6r7utrGTAJc72D0hA7YhyJutWXdk0fWHzkU5D70y/NQqYUl+u7OqKoZ3wW4QnLh1GvcbrZ1t5jhaezuw3Prd7T6Xaj6ZdUeP+IbqBz2nq6f9TUPTtq8kSvCdPJp2dP95/uJy+m2/GsaKMbgOebyWNubRcsR8uklNWvWfESkNNDbjfUz1Ej6hhy97YNONTtl03qoxgZV3Jcyqj7HJp2kNcG3MnOAdXp2WHN6dlet3viGkoB4Kjb3QRp9aKR4VmUmoW0T0aNwlHO8xdPuluGywC5MxYzjVZ1Sa7FJkbrx7TXdH2S6MhxI7psRbahgf6BtpQ71TZw4nLbAA/IJ2Ix+dF053R/qm16YvrCtON0f+rE5f6BidREz9RcM4TAdctHR75DtY5E0cjmjHPk6FSsy9nTMqraPdl70ZEVsalxbQy5LB3jFpfG5STHLYiYciGEZyl1EbEpaNVaEBlzuRQx2DE1NeVyIVcPH0PkGafLZVE4EdhQLIZ9LAg24YkTwJGuraaOjE1ZcAQiWnZm6SvSL5/58vMjb6kE/TIUxc65E0nF5vSOiq0paUmXa/v0tNvXCTBtluez/2JX0ZE7ohN9jsmN2WLTbYWlpx16VpS+oUlHYx539wTe131qomdbBxPblujIsaYTm/W165mzVPzmqx+RxODsiDtq7HEPX6D6oMONvtEJjVDVQJ815e1LvZpq74PrsnsW2S5MRy090ZY+TXrCjY5Fp3qMPaoUnC51F0pHo3CC3JrhZ85S0ZHJYxdPGadVZ2S93mET9EQOfWeP8zSMILr5vo7+nvpveDq722xQ6unvu69VDZtSbequgebpqnY4BV3HdL3NfdCFq9vRGHRE+PkVQFbggp52DE9MekeN3c2j0ZMTfSaMaOtyo2t9aow8oW8XShn6GuP5zpNuW/s1sj114aS7Ylh3DY8j1e3kUZReh+fsVwC52z11zDrdNtwyBwOj7v4Rd2q22z2Nx4lzbehyv/4bnvbUCQEZxozksCkdHXGjuX7yaEc0FiUvmebw9Q2lPM33OfCz95mzVPwW2xVzIUWLIkZYXNB7wibsEtpmaIQJCwmdsAu/FtpueEpigsmFiJgGXl34/QOJQwvPPScd/0x9Rfrl56niX8uGDe3DwZ5ORUeuqd3UU8WrtcKC1Ho2xh7kxkQFe8xXICFprWAhH59PyiKhdrzhLj4yst2HRQJWYAhiqrDItWotKdXIUIUGxavVOlJqqHWS8ZzGUKtDdHaVjMMivnBvVV/r9Dg98fsWsHlq74AzpBDPITqHDLXauBMlstUZGNklkD6DjXStCsWz3gTtTNZupy4BMptTLWbuC8iL3rtHEgn6Ld9y9d0qJcofWTqSTRy5pcoYdIurWdV93wJeZOmVpZV5R0KboTL3qWWPbt6bod5c8iY1aMkLZwP73DIs2+CdVwY67bs1b7+1dGSpWkrdX/Le8ybmq1fY1dIi3725kNUUSpnMJBLepeXlhC1Rm/BCZmudiz+AGnCvOpFdzRozS17f6t3aWnbVtjDveKe2VvOjd/ULnsTt3DJKkNmMCWVNiK2yLYAruUxXkVmrp6YalzKkpE0k7mdVixh5wbdQUmTfKkrEc4VSRneP3K7yrbAr6J36W/XaxYW4IbOUAyIWKnLWeNu2fG91PheyZZZWFr3ZXIhezmoz8dw9b7b2TTqXrdLSy6Ha5awXkNUJOFPLUg2+ZvSZJUjpvfib9PJdQM4BMmXCfyVCJvEIzGApIBN4InuCtOAVkkAGLaxSGa0FGQgLtlFyWNUiymAhtaTBQljUFkoBNrJCcJYgSosf2JVQgJtMg4QUhSAtxEssBKWBA1DCX4mQN3TziS02uT+/Wr0lcSjy3CUil4OKiSxTfO4Xxosh8f7yc5eIXA4qxc3WbWaycC+VVCiET3a39OSPasnt5r3dFGjXp8bbVXRkOhLi6cJnupwF+R6EIrDmCfs1iDFv3ViwHXziR/X5FXhhNszMnm6+deR/4t3lEiCzEa0iv04reUZ5wIF8keS6x8pKOT9lr+QMwYCKCcAbIpbjzT4+abCHk0peHwh7gnZzWK8MQ3yYMXmClVIljxNjtPZAOGgL2g1+HROmAmF1QAmwjN3q8fNJU4iz73FOil+xqVCEtXoCEaY+AKW8TgVpnpWGlUw9o5Su+8IRGxT7Wuj9BjpiXgtXhoI61sqa+bzDHw+uWaFarPHgygV1ArIh4uMZet2jjIAhXBfW14UB2RNEa8ZAwMSErHtkqfilzHdE2OaH2iAgOwFZ7fet53MRf9xaQA7S68jHIyb+/uJ6XieVEn6aZzg+r4Jl0oQCRnWQta5xkkqNYgv5AW2OeCJJmY6R6higpIKI0fkZ61pDWSCjJKdR6yipTKZJO5Ga45woKSUqKuBVTrgoVxIu7g54OyXXUS7E6dTYrlO7OiwylGxBpAwhGQ7gnGoXQhUKmdol9z2Qwv4kB45ggkPAFgkOnEy+1yVddp1USPnMNxlt/DO5lx3y/qv4H+pK9pysC3fKpMQidNA7RGz0v2DeHfcFZkcqfvO1Hlrfw4/lkTrA+ZNcuLBNP775b6adjBGWDBdw7Ip7WI9fPbu+KvAZKkG/HOI9/rBHyXsCYcisMkgH/SZmjUc0jxQ0F/bYedYezq+zSh2iONbKmB/yD3E3zIQJTTLQwoRDgRa8DPDgkg+HKX+YXU8qdeWLjP8HTJXnGnWeRg76E/Nh6Jc5HvolKGiS5iIPw5XQ8cat+aATkcp4uMEfdzDGIIRS0PMgFKAONwTrzA8CmggbdObrmYAqH+LZYHkjszwj1foNOr8JNtdqeVYXwRXbr2VCXITRSQE5xCdpGJPk1/NWf7wZI4OZtQZk0oDRb5DihyYipSOCKwNdtiFIfsYgs6TIlBSG1kmnOukkoRtFpFQmcVEWSgr5pTgnJakgk065Rq6QUhze5ZJrKhQ6OYJYtRTXdEsFfsFLsgJewQypkeC9+Zlt+SGXXiLyc5eIXA4SkZ+7yhBZXsx/Daso9Y9wFiT+A6CILCKLyCKyiCwilxpzu0RkEfnp9f+0iNZUkq/6ugAAAABJRU5ErkJggg=="
                alt="Card 2"
                style={{ width: "100%" }}
              />
              <Typography
                variant="h6"
                align="center"
                component="div"
                sx={{
                  fontSize: 10,
                  fontWeight: 400,
                  color: "#888888",
                  marginTop: 1,
                }}
              >
                Create
              </Typography>
              <Typography
                variant="h6"
                align="center"
                component="div"
                sx={{
                  marginTop: 1,
                }}
              >
                Media Ad
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={10}
          sx={{
            marginBottom: 5,
          }}
        >
          <Grid container justifyContent="flex-end" alignItems="flex-end">
            <Button
              variant="contained"
              sx={{
                color: "#2979ff",
                backgroundColor: "#2979ff",
              }}
            >
              <IconButton color="#399FF6" aria-label="Next">
                <Typography onClick={handleNext} color="#399FF6">
                  Next
                </Typography>
                <NavigateNextIcon />
              </IconButton>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CenteredCards;
