using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO.Ports;

namespace Temperatura_Arduino
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void lerTemperatura(object sender, EventArgs e)
        {
            byte[] dados = new byte[2];
            string valor;

            valor = serialPort1.ReadExisting();

            if (valor != "") {
                thermControl1.UpdateControl(Convert.ToInt32(valor));
                serialPort1.DiscardInBuffer();
                serialPort1.DiscardOutBuffer();
            }
        }

        private void serialPort1_DataReceived(object sender, SerialDataReceivedEventArgs e) {
            this.Invoke(new EventHandler(lerTemperatura));
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if(textBox1.Text != "")
            {
                serialPort1.PortName = textBox1.Text;
            }
            if (!serialPort1.IsOpen) {
                serialPort1.Open();
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            if (!serialPort1.IsOpen) { 
                serialPort1.Close();
            }
            Application.Exit();
        }
    }
}
