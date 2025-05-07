import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

export default function ProductCard({ name, desc, price, image, availability }) {
    const [open, setOpen] = useState(false);
    const isAvailable = availability?.toLowerCase() === 'dostępny';
    const maxShortLength = 80; // liczba znaków po której pojawia się "Pokaż więcej"
    const isLong = desc.length > maxShortLength;
    const shortDesc = isLong ? desc.slice(0, maxShortLength) + '...' : desc;

    return (
        <>
            <Card
                sx={{
                    width: 230,
                    height: 450,
                    boxShadow: 3,
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '60px',
                    overflow: 'hidden',
                    '&:hover': {
                        boxShadow: 6,
                        transform: 'scale(1.02)',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                    },
                }}
            >
                <CardMedia
                    component="img"
                    height="180"
                    image={image}
                    alt={name}
                    sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ pb: 1, pt: 2, flexGrow: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <Chip
                        label={availability}
                        color={isAvailable ? 'success' : 'error'}
                        size="small"
                        sx={{ mb: 2, alignSelf: 'flex-start' }}
                    />
                    <Typography variant="h6" gutterBottom noWrap>
                        {name}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" sx={{ mb: 2 }}>
                        {price}
                    </Typography>
                    {/* Opis skrócony */}
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            mt: 'auto',
                            minHeight: 60,
                            maxHeight: 60,
                            overflow: 'hidden',
                        }}
                    >
                        {shortDesc}
                    </Typography>
                    {/* Przycisk "Pokaż więcej" pod opisem, jeśli tekst jest długi */}
                    {isLong && (
                        <Button
                            size="small"
                            onClick={() => setOpen(true)}
                            sx={{ mt: 1, fontSize: '0.8rem', alignSelf: 'flex-start' }}
                        >
                            Pokaż więcej
                        </Button>
                    )}
                </CardContent>
            </Card>

            {/* MODAL Z PEŁNYM OPISEM */}
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                maxWidth="sm"
                fullWidth
                BackdropProps={{
                    sx: {
                        backdropFilter: "blur(6px)",
                        backgroundColor: 'rgba(0,0,30,0.3)'
                    }
                }}
                PaperProps={{
                    sx: {
                        borderRadius: 3,
                        p: 2
                    }
                }}
            >
                <DialogContent>
                    <IconButton
                        aria-label="close"
                        onClick={() => setOpen(false)}
                        sx={{ position: 'absolute', right: 8, top: 8 }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ mb: 2 }}>{name}</Typography>
                    <Typography variant="body1">{desc}</Typography>
                </DialogContent>
            </Dialog>
        </>
    );
}
