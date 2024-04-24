import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, TextInput, } from 'react-native';
import DatePicker from 'react-native-date-picker';
import colors from '../../utils/colors';
import { Kalendar, LeftArrow } from '../../assets';
import { Picker } from '@react-native-picker/picker';


export default function SkiningAnemia({ navigation }) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedSchool, setSelectedSchool] = useState('');
    const [hb1, setHb1] = useState('');
    const [hb2, setHb2] = useState('');
    const [penatalaksanaan, setPenatalaksanaan] = useState('');

    const toggleDatePicker = () => {
        setShowDatePicker(!showDatePicker);
    };

    const handleDateChange = date => {
        setSelectedDate(date);
        toggleDatePicker(); // Menutup date picker setelah memilih tanggal
    };

    // Daftar nama sekolah
    const schools = [
        'SMPN 1 Gedangan',
        'SMP Dharma Wanita',
        'SMP Pembangunan Jaya',
        'SMP Taman Harapan',
        'SMP TPI',
        'MTS Birul Ulum',
        'MTS Num Syafii',
        'SMA Dharma Wanita',
        'SMA Hang Tuah',
        'SMAN Gedangan',
        'SMK Ihip',
        'SMK Pembangunan Jaya',
        'SMK TPI',
        'MA Birul Ulum',
    ];

    const kembali = () => {
        navigation.goBack();
    };

    // Menghitung dan menampilkan hasil penatalaksanaan
    const hitungPenatalaksanaan = () => {
        // Logika penatalaksanaan berdasarkan hasil pemeriksaan Hb
        if (hb1 && hb2) {
            const hasilHb1 = parseFloat(hb1);
            const hasilHb2 = parseFloat(hb2);
            const rataRataHb = (hasilHb1 + hasilHb2) / 2;

            // Logika penatalaksanaan
            let hasilPenatalaksanaan = '';
            if (rataRataHb < 7) {
                hasilPenatalaksanaan = 'Anemia berat, lakukan transfusi darah segera.';
            } else if (rataRataHb >= 7 && rataRataHb < 10) {
                hasilPenatalaksanaan = 'Anemia sedang, berikan suplemen besi.';
            } else {
                hasilPenatalaksanaan = 'Tidak ada anemia, kondisi normal.';
            }

            // Set hasil penatalaksanaan
            setPenatalaksanaan(hasilPenatalaksanaan);
        } else {
            setPenatalaksanaan('Mohon masukkan hasil pemeriksaan Hb terlebih dahulu.');
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: colors.primary }}>
            {/* Bagian Header */}
            <View style={{ flexDirection: 'row', padding: 10, backgroundColor: colors.secondary, justifyContent: 'center', bottom: 0, height: 50 }}>
                <View style={{}}>
                    <TouchableOpacity onPress={kembali} style={{ right: 100, top: 0 }}>
                        <Image style={{ height: 30, width: 30, tintColor: 'white' }} source={LeftArrow} />
                    </TouchableOpacity>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', color: 'white', bottom: 25 }}>Skining Anemia</Text>
                </View>
            </View>

            <ScrollView>
                {/* Bagian Konten */}
                <View style={styles.content}>
                    {/* Tambahkan input untuk memilih tanggal */}
                    <Text style={styles.label}>Pilih Tanggal:</Text>
                    <TouchableOpacity style={styles.datePickerButton} onPress={toggleDatePicker}>
                        <Image style={styles.datePickerIcon} source={Kalendar} />
                        <Text style={styles.datePickerText}>
                            {selectedDate.getDate()} - {selectedDate.getMonth() + 1} - {selectedDate.getFullYear()}
                        </Text>
                    </TouchableOpacity>

                    {/* Date Picker */}
                    {showDatePicker && (
                        <View style={styles.datePickerContainer}>
                            <Text style={styles.datePickerTitle}>Pilih Tanggal</Text>
                            <DatePicker
                                date={selectedDate}
                                mode="date"
                                onDateChange={handleDateChange}
                                textColor={colors.primary}
                            />
                        </View>
                    )}

                    {/* bagian nama */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Regular' }}>Nama:</Text>
                        <TextInput style={styles.input} />
                    </View>

                    {/* NAMA SEKOLAH */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Regular' }}>Nama Sekolah:</Text>
                        <View style={[styles.input, styles.selectInput]}>
                            <Picker
                                selectedValue={selectedSchool}
                                onValueChange={(itemValue, itemIndex) => setSelectedSchool(itemValue)}>
                                {schools.map((school, index) => (
                                    <Picker.Item key={index} label={school} value={school} />
                                ))}
                            </Picker>
                        </View>
                    </View>

                    {/* Hasil Pemeriksaan Hb */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Regular' }}>Hasil Pemeriksaan Hb:</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TextInput
                                style={[styles.input, { flex: 1, marginRight: 10 }]}
                                placeholder="Hb 1"
                                value={hb1}
                                onChangeText={text => setHb1(text)}
                            />
                            <TextInput
                                style={[styles.input, { flex: 1 }]}
                                placeholder="Hb 2"
                                value={hb2}
                                onChangeText={text => setHb2(text)}
                            />
                        </View>
                        <TouchableOpacity style={styles.button} onPress={hitungPenatalaksanaan}>
                            <Text style={styles.buttonText}>Hitung Penatalaksanaan</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Penatalaksanaan */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Regular' }}>Penatalaksanaan:</Text>
                        <View style={styles.penatalaksanaanView}>
                            <Text style={styles.penatalaksanaanText}>{penatalaksanaan}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        bottom: 0,
        height: 50,
    },
    backButton: {
        // Ganti dengan style Anda
    },
    backIcon: {
        // Ganti dengan style Anda
    },
    title: {
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
        bottom: 25,
        // Ganti dengan style Anda
    },
    content: {
        padding: 10,
        marginTop: 20,
    },
    label: {
        fontFamily: 'Poppins-Regular',
        marginTop: 10,
        // Ganti dengan style Anda
    },
    datePickerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
    },
    datePickerIcon: {
        height: 30,
        width: 30,
        tintColor: colors.success,
        bottom: 5,
        marginRight: 10,
    },
    datePickerText: {
        fontFamily: 'Poppins-Regular',
        color: 'black',
        fontSize: 15,
    },
    datePickerContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10,
    },
    datePickerTitle: {
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 10,
        // Ganti dengan style Anda
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        color: 'black',
        fontFamily: 'Poppins-Regular',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10,
    },
    selectInput: {
        marginTop: 10,
    },
    button: {
        backgroundColor: colors.success,
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
    },
    buttonText: {
        fontFamily: 'Poppins-Regular',
        color: 'white',
        textAlign: 'center',
    },
    penatalaksanaanView: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
    },
    penatalaksanaanText: {
        fontFamily: 'Poppins-Regular',
        color: 'black',
    },
});
