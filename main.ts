
function turnWithGyro() {
    sensors.gyro2.calibrate();
    motors.largeBC.steer(200, 50, 200, MoveUnit.Degrees);
    sensors.gyro2.pauseUntilRotated(170);
    motors.stopAll();
} 