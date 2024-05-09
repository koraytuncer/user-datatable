import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import { FaUsers } from 'react-icons/fa';

const DataTableFilters = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
      };

    const filters = ['All Users', 'Contributor', 'Author', 'Administrator', "Subscriber"]
    return (
        <React.Fragment>
            <Grid container spacing={3} gap={12}>
                <Grid item xs sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                        xs={6}
                        height={40}
                        width={40}
                        sx={{
                            backgroundColor: "#D4DBFC",
                            borderRadius: "8px",
                            padding: "10px",
                            flexDirection: "row",
                            marginRight: "12px",
                        }}>
                        <FaUsers size={20} color={"#2940D3"} />
                    </Box>

                    <Typography sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px" }}>
                        Users
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                <List sx={{ display: 'flex',paddingBottom:"0px" }}>
                        {filters.map((filter, index) => (
                            <ListItem
                            key={index}
                            sx={{
                              fontFamily: 'Montserrat',
                              fontWeight: 600,
                              fontSize: "14px",
                              color: "#82868C",
                              borderBottom: index === activeIndex ? '4px solid #2940D3' : 'none',
                              paddingBottom: '20px',
                              cursor: 'pointer',
                            }}
                            onClick={() => handleClick(index)}
                          >
                            {filter}
                          </ListItem>
                        ))}
                        </List>
                </Grid>
                <Grid item xs>
                    <p>button ekle</p>
                </Grid>
                
            </Grid>
            <Divider sx={{ borderBottomWidth: 2 }}/>
        </React.Fragment>
    );
};

export default DataTableFilters;
