import wpilib

def put_swerve_module_keys(name):
    wpilib.SmartDashboard.putNumber(name+' Position', 0)
    wpilib.SmartDashboard.putNumber(name+' Raw Position', 0)
    wpilib.SmartDashboard.putNumber(name+' CL Position', 0)
    wpilib.SmartDashboard.putNumber(name+' ADC', 0)
    wpilib.SmartDashboard.putNumber(name+' Target', 0)
    wpilib.SmartDashboard.putNumber(name+' Steer Error', 0)
    wpilib.SmartDashboard.putNumber(name+' Drive Error', 0)
    wpilib.SmartDashboard.putNumber(name+' Drive Ticks', 0)
    wpilib.SmartDashboard.putNumber(name+' Drive Velocity', 0)
    wpilib.SmartDashboard.putNumber(name+' Drive Velocity (Max)', 0)
    wpilib.SmartDashboard.putNumber(name+' Drive Percent Output', 0)
    wpilib.SmartDashboard.putNumber(name+' Drive Current', 0)
    wpilib.SmartDashboard.putNumber(name+' Steer Current', 0)

class Robot(wpilib.IterativeRobot):
    def robotInit(self):
        self.heading = 0
        self.timer = wpilib.Timer()
        self.timer2 = wpilib.Timer()

        self.timer.reset()
        self.timer.start()

        self.timer2.reset()
        self.timer2.start()

        prefs = wpilib.Preferences.getInstance()

        prefs.putFloat('Test Pref Number', 5.0)
        prefs.putBoolean('Test Pref Boolean', True)
        prefs.putString('Test Pref String', 'hi')

    def disabledPeriodic(self):
        if self.timer.hasPeriodPassed(0.1):
            self.heading += 2

        wpilib.SmartDashboard.putNumber('Heading', self.heading)
        wpilib.SmartDashboard.putBoolean('IMU Present', True)

        put_swerve_module_keys('Front Left')
        put_swerve_module_keys('Front Right')
        put_swerve_module_keys('Back Left')
        put_swerve_module_keys('Back Right')


        if self.timer2.hasPeriodPassed(1):
            prefs = wpilib.Preferences.getInstance()

            n = prefs.getFloat('Test Pref Number', None)
            n2 = prefs.getFloat('Test Pref Number 2', None)

            b = prefs.getBoolean('Test Pref Boolean', None)
            b2 = prefs.getBoolean('Test Pref Boolean 2', None)

            s = prefs.getString('Test Pref String', None)
            s2 = prefs.getString('Test Pref String 2', None)

            print("Pref Number:" + str(n))
            print("Pref Number 2:" + str(n2))

            print("Pref Boolean:" + str(b))
            print("Pref Boolean 2:" + str(b2))

            print("Pref String:" + str(s))
            print("Pref String 2:" + str(s2))


if __name__ == '__main__':
    wpilib.run(Robot)
